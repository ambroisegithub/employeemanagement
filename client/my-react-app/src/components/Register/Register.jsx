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
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [usertypeError, setUsertypeError] = useState("");
    const [genderError, setGenderError] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate= useNavigate()

    const HandleNavigateExplore = ()=>{
        navigate('/Login')
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!user.email || !user.password || !user.username || !user.Usertype || !user.gender) {
          setErrorMessage("Please fill all the required fields.");
          return;
        } else{
            setErrorMessage("")
        }
    
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(user.email)) {
          setEmailError("Please enter a valid email address.");
          return;
        } else {
          setEmailError("");
        }
    
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
          setErrorMessage("");
          setUser({
            Usertype: "",
            username: "",
            email: "",
            password: "",
            gender: "",
          });
        } catch (error) {
          console.error(error);
          if (error.response.data.message === "User already exists") {
            setErrorMessage("An account with this email address already exists. Please use a different email address.");
          } else if (error.response.data.message === "Only one admin is allowed to sign up") {
            setErrorMessage("Only one admin is allowed to sign up. Please choose a different user type.");
          } else {
            setErrorMessage("An unexpected error occurred. Please try again later.");
          }
        }
      };
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    
        // Validate each input field onChange
        if (name === "email") {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(value)) {
            setEmailError("Please enter a valid email address.");
          } else {
            setEmailError("");
          }
        } else if (name === "password") {
          if (value.length < 6) {
            setPasswordError("Password must be at least 6 characters long.");
          } else {
            setPasswordError("");
          }
        } else if (name === "username") {
          if (value.length < 3) {
            setUsernameError("Username must be at least 3 characters long.");
          } else {
            setUsernameError("");
          }
        } else if (name === "Usertype") {
          if (value === "") {
            setUsertypeError("Please select a user type.");
          } else {
            setUsertypeError("");
          }
        } else if (name === "gender") {
          if (value === "") {
            setGenderError("Please select a gender.");
          } else {
            setGenderError("");
          }
        }
      };
    
      const handleEmailChange = (event) => {
        const { value } = event.target;
        setUser({ ...user, email: value });
        setEmailError("");
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
            <div style={{backgroundColor:"#1a5e5f",height:"100vh"}}>
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

                        {errorMessage && (
                    <div className="alert alert-danger" role="alert"  style={{color:"#dc3545",fontWeight:"600"}}>
                        {errorMessage}
                    </div>
                )}
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
                                
                                {usertypeError && <div className="error"    style={{color:"#dc3545",fontWeight:"600"}}>{usertypeError}</div>}

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

                           {usernameError && <div className="error"   style={{color:"#dc3545",fontWeight:"600"}}>{usernameError}</div>}

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
                                onChange={handleEmailChange}
                            />
                            
                            {emailError && <div className="error"   style={{color:"#dc3545",fontWeight:"600"}}>{emailError}</div>}
            
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

                           {passwordError && <div className="error"   style={{color:"#dc3545",fontWeight:"600"}}>{passwordError}</div>}
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
                                {genderError && <div className="error"   style={{color:"#dc3545",fontWeight:"600"}}>{genderError}</div>}
                            </div>
                            <button type="submit" className="signup1">Signup</button>
                            <br></br>
                            <span  className="alreadyhaveaccount">Already Have Any Account  &nbsp;<button onClick={HandleNavigateExplore}>Login?</button></span>

                          <br />
                       
                                <button className="googleButton" >
                                <img src={googleIcon}></img>
                                <p  className="continuewithGoogle">Continue With Google Account!!!</p>
                                </button> 
                               </form>
                     </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Register