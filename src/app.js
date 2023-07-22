import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import registerRoutes from './routes/register';
import employeeRoutes from './routes/addemploye';
import contactusRoutes from './routes/contactus';
import JobApplicationRoutes from './routes/JobApplication';
import addsalarytoemployeeRoutes from './routes/addsalarytoemployee';
import googleAccountRoutes from './routes/googleAccount';

import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import jwt from 'jsonwebtoken';
import UserGoogle from './models/googleModels'; // Assuming the path to your googleModels.js file
import { downloadImage } from './utils/downloadImage'; // Assuming the path to your downloadImage.js file

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize()); // Initialize Passport middleware

// Passport Google Strategy
passport.use(
    new GoogleStrategy({
            callbackURL: `http://localhost:5500/auth/google/redirect`,
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        },
        async(accessToken, refreshToken, profile, done) => {
            try {
                const user_email = profile.emails && profile.emails[0].value;
                let user = await UserGoogle.findOne({ email: user_email });

                if (!user) {
                    // If the user is not found, create a new user and save it in the database
                    const image_url = profile.photos && profile.photos[0].value;
                    const image_path = await downloadImage(image_url); // Download the image and save it to a local path
                    user = new UserGoogle({
                        name: profile.displayName,
                        email: user_email,
                        image: image_path, // Save the local path of the image to the database
                    });
                    await user.save();
                }

                // Generate JWT token and redirect URL
                const token = jwt.sign({ id: user._id, name: user.name, email: user.email, image: user.image },
                    process.env.JWT_SECRET, { expiresIn: "1h" }
                );
                const redirect_url = `http://localhost:5500/${token}`;
                return done(null, redirect_url);
            } catch (error) {
                done(error);
            }
        }
    ));

// Handle redirect URL
app.get('/:token', (req, res) => {
    try {
        const token = req.params.token;
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = {
            id: decoded.id,
            name: decoded.name,
            email: decoded.email,
            image: decoded.image,
        };
        return res.status(200).json({
            status: 'success',
            message: 'User authenticated successfully',
            user: user,
        });
    } catch (error) {
        return res.status(401).json({
            status: 'error',
            message: 'Invalid or expired token',
        });
    }
});

// Routes
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'], session: false }));
app.get('/auth/google/redirect', passport.authenticate('google', { session: false, failureRedirect: `http://localhost:5500/login` }), (req, res) => {
    res.redirect(req.user); // req.user has the redirection_url
});
app.get('/favicon.ico', (req, res) => res.status(204));
app.get('/', (req, res) => {
    return res.status(200).json({
        status: 'success',
        message: 'Welcome to the employee management system',
    });
});

app.use('/api/v1', registerRoutes);
app.use('/api/v1', employeeRoutes);
app.use('/api/v1', contactusRoutes);
app.use('/api/v1', addsalarytoemployeeRoutes);
app.use('/api/v1', JobApplicationRoutes);
app.use('/api/v1', googleAccountRoutes);
export default app;