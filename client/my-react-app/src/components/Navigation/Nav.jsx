import {Link} from "react-router-dom"
import "./Nav.scss"
function Nav() {
  return (
<div>
        <header className="header">
        <div className="contain">
            <div className="row align-items-center justify-content-between">
               <div className='logo'>
              <h1>< Link className="teachme1">EMS</Link><span className="teachme">Team</span></h1>
               </div>
               <input type="checkbox" id="nav-check"/>
               <label htmlFor="nav-check" className="nav-toggler">
                  <span></span>
               </label>
               <nav className="nav">
                  <ul>
                     <li><Link href="index.html" class="active"  className="Link">Home</Link></li>
                     <li><Link to="dashboard" className="Link">About</Link></li>
                     <li><Link href="projects.html" className="Link">Portifolio</Link></li>
                     <li><Link href="register.html" className="Link">Pages</Link></li>
                     <li><Link href="portfolio.html" className="Link">Blog</Link></li>
                     <li><Link href="contact.html" className="Link">Contact</Link></li>
                     <li><Link href="contact.html" className="Link">Register</Link></li>
                     &nbsp; &nbsp; &nbsp; 
                    <span className="Link1">
                    <li><Link href="portfolio.html" className="Link1">Text Chat</Link></li>
                     </span> 
                  </ul>
               </nav>
            </div>
        </div>
      </header>
     </div>
  );
}

export default Nav