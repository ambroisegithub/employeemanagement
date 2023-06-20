
// import {useNavigate,Link} from "react-router-dom"
import {Link} from "react-router-dom"

import "./Home.scss" 
const Home =()=> {

 

     // const handleNavigateExplore = () => {
    //     navigate("/explore")
    // }
    return ( 

<>
<div className="container-flex">
      <div className="sucusses">
            <h1 className="sucusses1">Untitled Trurly Values  Work-life Balance, We Work-Hard And Deliver. </h1>
      </div>

     <div className="explore">
            {/* <button onClick={handleNavigateExplore} className="explore1">Explore More</button> */}
            <Link  className="explore1">Explore More</Link>
    </div>
    <div className="More">
        <h1>Motivator</h1>
    </div>
</div>



</>

    );
}

export default Home