import "./Position.scss"
import { useNavigate } from "react-router-dom"
import  ImageA from "../image/employeeA.png"
function Position() {
  const navigate = useNavigate()
  const HandleNavigate =()=>{
    navigate("/DiscoverJob")
  }
  return (
    <div className="PositionContainer">
      <div className="Postion1">
        <div className="PostionA"><h1>Discover New Job Postions In Our Community </h1></div>
        <div className="PostionB"><p> Highlight how the availability of new job
           positions demonstrates your commitment to engaging with the local community.
           Explain that by providing access to job opportunities, you are actively 
           contributing to the growth and prosperity of the community.</p></div>
        <div className="PostionC"><button className="viewJob"  onClick ={HandleNavigate}>Discover Positions</button></div>
      </div>
      <div className="Postion"><img src ={ImageA} alt="Image A"></img></div>
    </div>
  )
}

export default Position
