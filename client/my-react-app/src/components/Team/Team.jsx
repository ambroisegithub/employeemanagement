import Image1  from  "../image/employee14.jpg"
import Image2  from  "../image/employee13.jpg"
import Image3  from  "../image/employee15.jpg"
// import Image4  from  "../image/woman.jpg"
// import Image5  from  "../image/women2.jpg"
// import Image6  from  "../image/employee9.jpg"
// import Image7  from  "../image/employee12.jpg"
// import Image8  from  "../image/woman.jpg"
import {Link} from "react-router-dom"
import "./Team.scss"
const  Team = ()=> {
    return(
        <div>
        
<div className="container-grid">
<div className="Box">
    <img src={Image1} alt="Image one"></img>
    <p className="name">Ambroise Shakur</p>
    <p className="name1">C.E.O</p>
    <hr></hr>
    <div className="description">
    The CEO is vital in guiding and steering the overall direction,
     success, and growth of the company.
    </div>
    
    <div className="learn">
        <Link className="LearnMore">Learn More</Link>
    </div>
</div>
<div className="Box">
    <img src={Image2} alt="Image two"></img>
    <p className="name">Ambroise Shakur</p>
    <p className="name1">C.E.O</p>
    <hr></hr>
    <div className="description">
    The CEO is vital in guiding and steering the overall direction,
     success, and growth of the company.
    </div>
    
    <div className="learn">
        <Link className="LearnMore">Learn More</Link>
    </div>

</div>
<div className="Box">
    <img src={Image3} alt="Image Three"></img>
    <p className="name">Ambroise Shakur</p>
    <p className="name1">C.E.O</p>
    <hr></hr>
    <div className="description">
    The CEO is vital in guiding and steering the overall direction,
     success, and growth of the company.
    </div>
    
    <div className="learn">
        <Link className="LearnMore">Learn More</Link>
    </div>

</div>


<div className="Box">
    <img src={Image1} alt="Image one"></img>
    <p className="name">Ambroise Shakur</p>
    <p className="name1">C.E.O</p>
    <hr></hr>
    <div className="description">
    The CEO is vital in guiding and steering the overall direction,
     success, and growth of the company.
    </div>
    
    <div className="learn">
        <Link className="LearnMore">Learn More</Link>
    </div>
</div>
<div className="Box">
    <img src={Image2} alt="Image two"></img>
    <p className="name">Ambroise Shakur</p>
    <p className="name1">C.E.O</p>
    <hr></hr>
    <div className="description">
    The CEO is vital in guiding and steering the overall direction,
     success, and growth of the company.
    </div>
    
    <div className="learn">
        <Link className="LearnMore">Learn More</Link>
    </div>

</div>
<div className="Box">
    <img src={Image3} alt="Image Three"></img>
    <p className="name">Ambroise Shakur</p>
    <p className="name1">C.E.O</p>
    <hr></hr>
    <div className="description">
    The CEO is vital in guiding and steering the overall direction,
     success, and growth of the company.
    </div>
    
    <div className="learn">
        <Link className="LearnMore">Learn More</Link>
    </div>

</div>
</div>
        </div>
    )
}

export default Team