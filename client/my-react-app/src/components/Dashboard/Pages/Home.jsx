import './Home.scss'
import {FaUsers} from "react-icons/fa"
import {BsFillPeopleFill} from "react-icons/bs"
import {GrMail} from "react-icons/gr"
import {MdPostAdd} from "react-icons/md"
import Tabledash from '../Tables/Tabledash';
import {Line} from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from "chart.js"
     

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,

)

const  Home = ()=> {
  const data = {
    labels: ["Jan 01", "Feb 01", "Mar 01", "Apr 01", "May 01", "Jun 01", "Jul 01", "Aug 01", "Sep 01", "Oct 01", "Nov 01", "Dec 01"],
    datasets:[{
      data:[1,10,2,8,7,2,8,2,8,2,5,1],
      backgroundColor:'transparent',
      color:'white',
      borderColor:"#031427",
      pointBorderColor:"transparent",
      pointBorderWidth:"4",
      tension:0.5
    }]
  };
  const options={
    plugins:{
      legend:false
    },
    scales:{
      x:{
        grid:{
          display:false
        }
      },
      y:{
        min:2,
        max:10,
        ticks:{
          stepSize:2,
          callback:(value)=>value + "k"
        },
        grid:{
          borderDash:[10]
        }
      }
    }
  };
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
          <div className="chart" style={{width:"100%",height:"300px",borderRadius:"5px"}}>
            <div style={{width:"90%",marginLeft:"20px"}}>
              <Line data={data} options={options} ></Line>
            </div>
          </div>
          <div className="chart" style={{width:"100%",height:"300px",borderRadius:"5px"}}></div>
        </div>
      </div>

      <div style={{width:"100%",height:"auto",border:"1px solid black",marginTop:"20px",borderRadius:"5px"}}>
          <Tabledash/>          
      </div> 

      </>

    )
  }
  
  export default Home
  