import "./Login.scss"  
import Navigation from "../Navigation/Nav"
import googleIcon from "../image/googleicon.png"
import {useNavigate} from "react-router-dom"
import {useState} from "react"
import axios from "axios"
const Login = ()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [loginError, setLoginError] = useState("");
  
    const handleLogin = async (e) => {
      e.preventDefault();
      // Reset validation messages
      setEmailError("");
      setPasswordError("");
      setLoginError("");
  
      // Email validation regex pattern
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      try {
        // Check if email and password are provided
        if (!email) {
          setEmailError("Please provide an email");
        } else if (!emailPattern.test(email)) {
          setEmailError("Please provide a valid email");
        }
  
        if (!password) {
          setPasswordError("Please provide a password");
        } else if (password.length < 6 || password.length > 12) {
          setPasswordError("Password must be between 6 and 12 characters");
        }
  
        if (!email || !password) {
          return;
        }
  
        // Make a POST request to your login endpoint
        const response = await axios.post("http://localhost:5558/api/v1/login", {
          email,
          password,
        });
  
        // Assuming the backend returns a token and user data upon successful login
        const { token, userSign } = response.data;
  
        // Save the token in local storage for future authenticated requests
        localStorage.setItem("token", token);
  
        // Redirect to the dashboard if the user is an admin
        if (userSign && userSign.Usertype === "admin") {
          navigate("/dashboard");
        } else {
          // Redirect to a different page if the user is not an admin (optional)
          navigate("/someOtherPage");
        }
  
        // Clear input fields after successful login
        setEmail("");
        setPassword("");
      } catch (error) {
        if (error.response && error.response.status === 401) {
          // Incorrect email or password
          setLoginError("Incorrect email or password");
        } else {
          // Other login-related errors
          setLoginError("Login failed. Please try again.");
        }
      }
    };
  
    const navigate = useNavigate();
    const HandleNavigate = () => {
      navigate("/Signup");
    };
    const HandleNavigateforget =()=>{
    navigate("/Forget")
    }
    return(
        <>
        <div>
            <Navigation/>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div  className="containerLogin">
            <center>
              <div className="rowContainer">
                     <div className="Login">
                        <h1 className="Loginupheader">Login</h1>
                        <p className="dont">Do You Have An Account?</p>
                               <form action=""  onSubmit={handleLogin}>                                                                                                            

                                     <label className="labelInput"  htmlFor="">Email</label>
                                     <br />
                                     <input type="text"  id="email" className="email" placeholder="Email"
                                     value={email}
                                     onChange={(e) => setEmail(e.target.value)}
                                     />
                                       {emailError && <p className="error">{emailError}</p>}
                                     <br />
                                     <label className="labelInput" htmlFor="">Password</label>
                                     <br />
                                     <input type="password"  id="password"  className="password" placeholder="Password"                                    
                                     value={password}
                                     onChange={(e) => setPassword(e.target.value)}
                                     />
                                       {passwordError && <p className="error">{passwordError}</p>}
                                     <br/>
                                     {loginError && <p className="error">{loginError}</p>}
                                     <div className="twobutton">
                                     <button type="submit" className="login1">Login</button>
                                     <br></br>
                                     <button className="forgetPassword" onClick={HandleNavigateforget}>Forget Password</button>
                                     <br />
                                     </div>
                                     <span  className="alreadyhaveaccount"  >Do Not Have An Account  &nbsp;<button onClick={HandleNavigate}>Signup?</button></span>
                                     <br />
                                    <button  type="submit" className="googleButton">
                                    <img src={googleIcon}></img>
                                    <p  className="continuewithGoogle">Continue With Google Account!!!</p>
                                    </button> 
                               </form>
                     </div>
            </div>
            </center>
        </div>

        </>
    )
}

export default Login