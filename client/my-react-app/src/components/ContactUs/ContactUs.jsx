import "./ContactUs.scss"
import Contact from "../image/contact.png"
const  ContactUs =()=>{

    return (
        <div className="ContactUsContainer">
              <div className="ContactUsRow"><img  src={Contact}></img></div>
              <div className="ContactUsRow1">
                 <div className="contact1"><h1>Unlock your career potential by reaching out to us today.</h1></div>
                 <div className="contact1"><p>At our company, we believe in the power of collaboration, the joy of creativity, 
                    and the fulfillment of meaningful work. Reach out to us today and unleash your potential.</p></div>
                 <div className="contact1">
                   <label>Full Name</label>
                    <br></br>
                    <br></br>
                    <input type="text"></input>
                    <br></br> 
                   <label>Email</label>
                   <br></br> 
                   <br></br>
                   <input type="email"></input>
                   <br></br> 
                   <label>Phone Number</label>
                   <br></br> 
                   <br></br>

                   <input type="text"></input>
                   <br></br> 
                   <label>Message</label>
                   <br></br> 
                   <textarea type="text" cols={0} rows={5}></textarea>
                   <br></br>
                   <button>Submit</button>



                 </div>

              </div>



        </div>
    )
}
export default ContactUs