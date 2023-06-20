import './App.css'
import Home from './components/Home/Home'
import Team from './components/Team/Team'
import Nav from "./components/Navigation/Nav"
import Member from "./components/Member/Member"
import Job from "./components/Job/Job"
import Position from "./components/Position/Position"
import ContactUs from "./components/ContactUs/ContactUs"



const  App=()=> {


  return (
<>
<div>

<Nav /> 
</div>
<br></br>
<br></br>
<br></br>
<br></br>

 <div>
<Home/> 
 </div>
  <div>
<Job/> 
 </div>
 <div>
<Team/> 
 </div>
 <div>
<Position/> 
 </div>
 <div>
<Member/> 
 </div>
 <div>
<ContactUs/>
 </div>
 </>   
  )
}

export default App
