import "./Register.scss"  
import Navigation from "../Navigation/Nav"
import a from  "../image/a.jpg" 
import googleIcon from "../image/googleicon.png"
import {useNavigate} from   "react-router-dom"
import { useState } from "react"
import axios from 'axios';

const Register = ()=>{

    const [user, setUser] = useState({
        Usertype: "",
        username: "",
        email: "",
        password: "",
        gender: "",
    });

    const navigate= useNavigate()

    const HandleNavigateExplore = ()=>{
        navigate('/Login')
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:5555/api/v1/signup', user);
            console.log(response.data);
            // If the request is successful and the user is an admin, navigate to the dashboard
            if (response.status === 200 && user.Usertype === 'admin') {
              navigate('/dashboard');
            } else {
              // If the user is not an admin, display a message or perform some other action
              console.log('User is not an admin');
            }
        } catch (error) {
            console.error(error);
        }
    };
    

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    return(
        <>
            <div>
                <Navigation/>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="containerRegister">
                <div className="rowContainer">
                    <div className="register1">
                        <h1>EMSTeam</h1>
                        <div className="start">Start Your Journey With Us</div>
                        <div className="explain">
                            Explain that by providing access to job opportunities,
                            you are actively contributing to the growth and prosperity of the community.
                        </div>
                        <div className="simply1">
                            <div className="simply">
                                <p>Simply Unbelievable! I am Really satisfied With My projects and bussiness. This is Absolutely Wonderful.</p>
                            </div>
                            <div className="image1">
                                <div className="image"> 
                                    <img src={a}></img>
                                </div>
                                <p>JOIN EMS TO DAY!</p>
                            </div>
                        </div>
                    </div>
                    <div className="register">
                        <h1 className="signupheader">Sign Up</h1>
                        <p className="dont">Do Not Have An Account?</p>
                        <form onSubmit={handleSubmit}>
                            <p className="whoare">Who Are You?</p>
                            <div className="radioContainer">
                                <select
                                    style={{border:"none",fontSize:"15px",outline:"none",padding:"10px",borderRadius:"5px",color:"#1a5e5f",fontWeight:"700",width:"75%"}}
                                    name="Usertype"
                                    value={user.Usertype}
                                    onChange={handleChange}
                                >
                                  <option value="">Select User Type</option>
                                  <option value="admin">admin</option>
                                  <option value="manager"><main></main>manager</option>
                                  <option value="employee">amployee</option>
                                </select>
                            </div>
                            <br />
                            <label className="labelInput" htmlFor="username">Full Name</label>
                            <br />
                            <input
                                type="text"
                                id="username"
                                name="username"
                                className="name"
                                placeholder="Full Name"
                                value={user.username}
                                onChange={handleChange}
                            />
                            <br />
                            <label className="labelInput" htmlFor="email">Email</label>
                            <br />
                            <input
                                type="text"
                                id="email"
                                name="email"
                                className="email"
                                placeholder="Email"
                                value={user.email}
                                onChange={handleChange}
                            />
                            <br />
                            <label className="labelInput" htmlFor="password">Password</label>
                            <br />
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="password"
                                placeholder="Password"
                                value={user.password}
                                onChange={handleChange}
                            />
                            <br/>
                            <br />
                            <div className="radioContainer">
                                <select
                                    style={{border:"none",fontSize:"15px",outline:"none",padding:"10px",borderRadius:"5px",color:"#1a5e5f",fontWeight:"700",width:"75%"}}
                                    name="gender"
                                    value={user.gender}
                                    onChange={handleChange}
                                >
                                  <option value="">Select Your Gender</option>
                                  <option value="male">Male</option>
                                  <option value="female">Female</option>
                                </select>
                            </div>
                            <button type="submit" className="signup1">Signup</button>
                            <br></br>
                            <span  className="alreadyhaveaccount">Already Have Any Account  &nbsp;<button onClick={HandleNavigateExplore}>Login?</button></span>

                            <h3>Or</h3>
                                <button className="googleButton" >
                                <img src={googleIcon}></img>
                                <p  className="continuewithGoogle">Continue With Google Account!!!</p>
                                </button> 
                               </form>
                     </div>
            </div>
        </div>
        </>
    )
}

export default Register