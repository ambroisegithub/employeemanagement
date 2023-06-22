import "./Register.scss"  
import Navigation from "../Navigation/Nav"
import a from  "../image/a.jpg" 
import Footer from "../Footer/Footer"   
import googleIcon from "../image/googleicon.png"
const Register = ()=>{


    return(

        <>
        <div>
            <Navigation/>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div  className="containerRegister">
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
                               <form action="">
                              
                                    <p className="whoare">Who Are You?</p>
                                    <div className="radioContainer">
                                    <p className="radioInput"><input type="radio" id="Admin"  className="radio" name="radio" value="Admin" checked="checked"/><label>Admin</label></p>                  
                                    <p className="radioInput"><input type="radio" id="Manager" className="radio" name="radio" value="Manager"/><label >Manager</label></p>     
                                    <p className="radioInput"><input type="radio" id="Employer" className="radio" name="radio" value="Employer"/> <label>Employer</label></p>    
                                    </div>
                                                                                                              
                                     <br />
                                     <label  className="labelInput" htmlFor="">Full Name</label>
                                     <br />
                                     <input type="text"  id="name" className="name" placeholder="Full Name"/>
                                     <br />
                                     <label className="labelInput"  htmlFor="">Email</label>
                                     <br />
                                     <input type="text"  id="email" className="email" placeholder="Email"/>
                                     <br />
                                     <label className="labelInput" htmlFor="">Password</label>
                                     <br />
                                     <input type="password"  id="password"  className="password" placeholder="Password"/>
                                     <br/>
                                     <button className="signup1">Signup</button>
                                     <br></br>
                                     <h3>Or</h3>
                                    <button className="googleButton">
                                    <img src={googleIcon}></img>
                                    <p>Continue With Google Account!</p>
                                    </button> 
                               </form>
                     </div>
            </div>
        </div>
        <div>
            <Footer/>
        </div>
        </>
    )
}

export default Register