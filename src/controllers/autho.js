// import passport from 'passport';
// import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
// import jwt from 'jsonwebtoken';
// import db from "../models/googleAccount";
// passport.use(
//     new GoogleStrategy({
//             callbackURL: `http://localhost:5500/auth/google/redirect`,
//             clientID: process.env.GOOGLE_CLIENT_ID,
//             clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//         },
//         async(accessToken, refreshToken, profile, done) => {
//             try {
//                 const user_email = profile.emails && profile.emails[0].value;
//                 const [user] = await db('users').select(['id', 'name', 'email']).where('email', user_email);
//                 let redirect_url = "";

//                 if (user) {
//                     const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '1h' });
//                     redirect_url = `http://localhost:5173/${token}`;
//                     return done(null, redirect_url);
//                 } else {
//                     redirect_url = `http://localhost:5173/user-not-found/`;
//                     return done(null, redirect_url);
//                 }
//             } catch (error) {
//                 done(error);
//             }
//         }
//     )
// );