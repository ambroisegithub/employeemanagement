import "./Login.scss"  
import Navigation from "../Navigation/Nav"
import Footer from "../Footer/Footer"   
import googleIcon from "../image/googleicon.png"
import {useNavigate} from "react-router-dom"
const Login = ()=>{


    const   navigate = useNavigate()
    const   HandleNavigate =()=>{
        navigate('/Signup')
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
                               <form action="">                                                                                                            

                                     <label className="labelInput"  htmlFor="">Email</label>
                                     <br />
                                     <input type="text"  id="email" className="email" placeholder="Email"/>
                                     <br />
                                     <label className="labelInput" htmlFor="">Password</label>
                                     <br />
                                     <input type="password"  id="password"  className="password" placeholder="Password"/>
                                     <br/>
                                     <button className="login1">Login</button>
                                     <br></br>
                                     <span  className="alreadyhaveaccount">Do Not Have An Account  &nbsp;<button onClick={HandleNavigate}>Signup?</button></span>
                                     <h3>Or</h3>
                                    <button className="googleButton">
                                    <img src={googleIcon}></img>
                                    <p  className="continuewithGoogle">Continue With Google Account!!!</p>
                                    </button> 
                               </form>
                     </div>
            </div>
            </center>
        </div>
        {/* <div>
            <Footer/>
        </div> */}
        </>
    )
}

export default Login