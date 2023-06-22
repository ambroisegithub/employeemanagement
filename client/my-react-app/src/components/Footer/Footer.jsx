import "./Footer.scss"
import DateTimeUpdater from './Time';
import {Link} from "react-router-dom"
import   {AiOutlineTwitter} from  "react-icons/ai"
import {AiFillFacebook}   from   "react-icons/ai"
import {AiOutlineInstagram}   from   "react-icons/ai"
import {AiFillLinkedin}   from   "react-icons/ai"
const Footer  =()=>{
    return (
<>
<div className="containerFooter">
    <div className="containerrow1">
            <div className="rowFooter">    
                <p className="stay">stay Up Data With The Latest News, Announcements And Ariticles</p>
                <span className="emsteam"><h1 className="team">EMS<span className="teamx">Team</span></h1></span>
                <p className="joy">Joy Of Creative, And Fulfilment Of Meaningful Work.</p>
            </div>
            <div className="rowFooter">
                <h2>Employee</h2>
              <p><Link className="footerLink">Employee Benifits</Link> </p>
              <p><Link className="footerLink">Employee Self-service</Link></p>
              <p><Link className="footerLink">Task And project Management</Link></p>
              <p><Link className="footerLink">Employee Recognation Programs</Link></p>   
            </div>
            <div className="rowFooter">
            <h2>Social Media</h2>
                   <p><Link className="footerLink">Twitter  </Link></p>   
                   <p><Link className="footerLink">Facebook </Link></p>
                   <p><Link className="footerLink">Whatsapp </Link></p>
                   <p><Link className="footerLink">Instagram</Link></p>
            </div>
            <div className="rowFooter">
            <h2>Terms And Conditions</h2>
                    <p><Link className="footerLink">Legal   </Link></p>
                    <p><Link className="footerLink">Terms   </Link></p>   
                    <p><Link className="footerLink">Privacy </Link></p>  
                    <p><Link className="footerLink">Cookies </Link></p>  
                    <p><Link className="footerLink">Licences</Link></p>
            </div>
        </div>
        <div className="socialMediaicons">
           <div className="copyright"><p> <DateTimeUpdater/>  </p></div>
           <div className="socialIcons"><Link src=""  className="twitter"><AiOutlineInstagram />&nbsp;&nbsp;&nbsp;</Link>   <Link src=""  className="twitter"><AiOutlineTwitter />&nbsp;&nbsp;&nbsp;</Link>  <Link src=""  className="twitter"><AiFillFacebook />&nbsp;&nbsp;&nbsp;</Link> <Link src=""  className="twitter"><AiFillLinkedin />&nbsp;&nbsp;&nbsp;</Link></div>
        </div>
        </div>
        </>        
    )
}


export default Footer