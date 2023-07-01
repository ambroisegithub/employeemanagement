import "./DiscoverJobPosition.scss"
import Navigation from "../Navigation/Nav"
import Home from "../Home/Home"
import Footer from "../Footer/Footer"
import Image1 from '../image/manager.avif'
import Image2 from "../image/financeandAccounting.png"
import Image3 from "../image/it.png"
import Image4 from  "../image/customerservice.jpg"
import Image5 from "../image/researchandDevelopments.png"
import Image6 from "../image/projectManagements.png"
import Image7 from "../image/humanresources.png"
import Image8 from "../image/salesAnddMarketing.png"
import { useNavigate } from "react-router-dom"


const DiscoverJobPosition = ()=>{
   const navigate = useNavigate()

   const HandleUseNavigate =()=>{

      navigate('/JobApplicationForm')
   }
    return (
        <>
        <Navigation/>
        <br />
        <br />
        <br />
        <br />
        <div>
            <Home/>
        </div>
             <div  className="ContainerDiscover">
             <center><h1>Explore Job Category...</h1></center>
             <br />
             <center><p> Explain that by providing access to job opportunities, you are actively contributing to the growth and prosperity of the community.</p></center>
                <div className="RowDiscover">
                    <div className="catagoryRow">
                        <div className="cotegory_blog">
                           <img src={Image1} alt="executive Leadership"></img>
                           <div className="categorydisc">
                                <p>Executive Leadership</p>
                                <p>(10 Positions)</p>
                           </div>
            <button onClick={HandleUseNavigate} >Apply</button>

                        </div>
                    </div>
                    <div className="catagoryRow">
                        <div className="cotegory_blog">
                           <img src={Image7} alt="Human Resources"></img>
                           <div className="categorydisc">
                                <p>Human Resources</p>
                                <p>(10 Positions)</p>
                           </div>
                           <button>Apply</button>
                        </div>
                    </div>
                    <div className="catagoryRow">
                        <div className="cotegory_blog">
                           <img src={Image8} alt="Sales and markteting"></img>
                           <div className="categorydisc">
                                <p>Sales & marketing</p>
                                <p>(10 Positions)</p>
                           </div>
                           <button onClick={HandleUseNavigate} >Apply</button>
                        </div>
                    </div>

                    <div className="catagoryRow">
                    <div className="cotegory_blog">
                        <img src={Image2} alt="Finance Accounting"></img>
                           <div className="categorydisc">
                           <p>Finance & Accounting</p>
                          <p>(12 Positions)</p>
                          </div>
                          <button onClick={HandleUseNavigate} >Apply</button>
                           </div>
                    </div>
                    
                    <div className="catagoryRow">
                    <div className="cotegory_blog">
                        <img src={Image3} alt="Finance Accounting"></img>
                           <div className="categorydisc">
                           <p>Information Tech</p>
                           <p>(13 Positions)</p>
                          </div>
                        <button>Apply</button>
                           </div>
                    </div>


                    <div className="catagoryRow">
                    <div className="cotegory_blog">
                        <img src={Image4} alt="Customer Service"></img>
                           <div className="categorydisc">
                           <p>Customer Service</p>
                           <p>(14 Positions)</p>
                          </div>
                        <button>Apply</button>
                           </div>
                    </div>

                    <div className="catagoryRow">
                    <div className="cotegory_blog">
                        <img src={Image5} alt="Research Development"></img>
                           <div className="categorydisc">
                           <p>Research Development</p>
                           <p>(10 Positions)</p>
                          </div>
                        <button>Apply</button>
                           </div>
                    </div>

                    <div className="catagoryRow">
                    <div className="cotegory_blog">
                        <img src={Image6} alt="Project Management"></img>
                           <div className="categorydisc">
                           <p>Project Management</p>
                        <p>(20 Positions)</p>
                          </div>
                        <button>Apply</button>
                           </div>
                    </div>

                </div>
             </div>
             <div>
                <Footer/>
             </div>
        </>
    )
}
export default DiscoverJobPosition