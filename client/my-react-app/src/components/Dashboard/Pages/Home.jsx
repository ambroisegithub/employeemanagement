import './Home.scss'
import {FaUsers} from "react-icons/fa"
import {BsFillPeopleFill} from "react-icons/bs"
import {GrMail} from "react-icons/gr"
import {MdPostAdd} from "react-icons/md"

const  Home = ()=> {
    return (

      <>
            <div className="HomeContainer">
          <div className="HomeRow">
            <div className="totalDetail">
              <div className="userName" style={{gap:"5px"}}>
                <li><FaUsers style={{color:"white",fontSize:"30px"}}/></li>
                <li style={{fontWeight:"900",marginTop:"1px",color:"#031427"}} className='totalusers'>Total Users</li>
              </div>
              <div style={{display:"flex",flexDirection:"row",gap:"5px"}} className='allRegisted'>
                <p style={{color:"white"}}>All Registed Users</p>
                <p  className="number" style={{color:"#031427",fontWeight:"900"}}>2000</p>
              </div>
            </div>
            <div className="totalDetail" >
              <div className="userName" style={{gap:"5px"}}>
                <li><BsFillPeopleFill style={{color:"white",fontSize:"30px"}}/></li>
                <li style={{fontWeight:"900",marginTop:"1px",color:"#031427"}} className='totalusers'>Employers</li>
              </div>
              <div style={{display:"flex",flexDirection:"row",gap:"5px"}} className='allRegisted'>
                <p style={{color:"white"}}>Our Employers</p>
                <p style={{color:"#031427",fontWeight:"900"}} className="number">2000</p>
              </div>
            </div>            <div className="totalDetail">
              <div className="userName" style={{gap:"5px"}}>
                <li><GrMail style={{color:"white",fontSize:"30px"}}/></li>
                <li style={{fontWeight:"900",marginTop:"1px",color:"#031427"}} className='totalusers'>Total Mails</li>
              </div>
              <div style={{display:"flex",flexDirection:"row",gap:"5px"}} className='allRegisted'>
                <p style={{color:"white"}}>All Mails</p>
                <p style={{color:"#031427",fontWeight:"900"}} className="number">2000</p>
              </div>
            </div>            <div className="totalDetail">
              <div className="userName" style={{gap:"5px"}}>
                <li><MdPostAdd style={{color:"white",fontSize:"30px"}}/></li>
                <li style={{fontWeight:"900",marginTop:"1px",color:"#031427"}} className='totalusers'>Total Posts</li>
              </div>
              <div style={{display:"flex",flexDirection:"row",gap:"5px"}} className='allRegisted'>
                <p style={{color:"white"}}>Posts Numbers</p>
                <p style={{color:"#031427",fontWeight:"900"}} className="number">2000</p>
              </div>
            </div>
          </div>
      </div>

      <div className="chartContainer" style={{width:"auto",height:"auto",marginTop:"20px"}}>
        <div className="chartRow">
          <div className="chart" style={{width:"100%",height:"300px",borderRadius:"5px"}}></div>
          <div className="chart" style={{width:"100%",height:"300px",borderRadius:"5px"}}></div>
        </div>
      </div>
      </>

    )
  }
  
  export default Home
  