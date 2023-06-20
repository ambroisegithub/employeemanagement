import "./Member.scss"
import Image12 from  "../image/employee121.png"
function Member() {
  return (
    <div>
      <div className="containerMember">
          <div className="rowMember">
            < h1 className="become">Become Member</h1>
            <br></br>
            <div  className="oneTeam">
                <p>One Team, One Dream, We Are Here To Support The Employee Management Scheme!</p>
            </div>
           
            <input type="text" id="email" placeholder="Enter Your Email"></input>
            <br></br>
            <button>Meet The Team</button>
          </div>
          <div className="rowMember1">
            <img src={Image12} alt="Image 12"></img>
          </div>
      </div>
    </div>
  )
}

export default Member
