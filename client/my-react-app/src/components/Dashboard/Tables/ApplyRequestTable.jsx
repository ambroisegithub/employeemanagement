import "./ApplyRequest.scss"
// import Model from "../Model/Model"
import {useState,useEffect} from "react"
import axios from  "axios"
const ApplyRequestTable =()=>{
  const [getApplied, setGetApplied] = useState([]);

  const [modal,setModal] = useState(false);

const toggleModel =()=>{
  setModal(!modal)
 
}

if(modal){
  document.body.classList.add("active-modal")
}
else{
  document.body.classList.remove("active-modal")
}
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://employeemanagementsystem-nid5.onrender.com/api/v1/get-allApplied"
        );
        setGetApplied(response.data.files);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

    return (
        <body  style={{height:"auto"}}>
  <div className="containerTabl">
    <div className="tbl_containe">
      {/* <h1>Responsive table</h1> */}
      <p>Lorem, ipsum.</p>
      <table className="tb">
        <thead>
          <tr>
            <th>No</th>
            <th>Job</th>
            <th>First Name</th>
            <th>Family Name</th>
            <th>Citizenship</th>
            <th>Date Of Birth</th>
            <th>Address</th>
            <th>Email</th>
            <th>Phone</th>
            <th>zipcode</th>
            <th>city</th>
            <th>Application Letter</th>
            <th>Curriculum Vitae</th>
            <th colSpan="2" data-table="Action">Action</th>
          </tr>
        </thead>
        
        <tbody>

        {getApplied.map((item,index) => (
            <tr key={item._id}>
              <td data-table="No">{index + 1}</td>
              <td data-table="Job">{item.job}</td>
              <td data-table="First Name">{item.firstname}</td>
              <td data-table="Family Name">{item.familyname}</td>
              <td data-table="Citizenship">{item.citizenship}</td>
              <td data-table="Date Of Birth">{item.dateofbirth}</td>
              <td data-table="Address">{item.address}</td>
              <td data-table="Email">{item.email}</td>
              <td data-table="Phone">{item.phone}</td>
              <td data-table="zipcode">{item.zipcode}</td>
              <td data-table="city">{item.city}</td>
              
              <td data-table="Application Letter"> 
              {item.applicationLetter && (
                  <a href={item.applicationLetter} target="_blank" rel="noopener noreferrer">
                    View A L
                  </a>
                )}
              </td>
              <td data-table="Curriculum Vitae"> 
              {item.curriculumVitae && (
                  <a href={item.curriculumVitae} target="_blank" rel="noopener noreferrer">
                    View C V 
                  </a>
                )}
              
               </td>
              <td>
                <button   onClick={toggleModel} className="btn_edi" data-table="Edit">
                  Edit
                </button>
                <button className="btn_tras" data-table="Delete">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        
        </tbody>
      </table>
    </div>


  </div>
{
  modal &&(


    <div className="model">
  <div   onClick  ={toggleModel} className="overlay"></div>
  <div className="model-content">

  <button    style={{display:"flex",justifyContent:"center"}} onClick={toggleModel}>
      close
    </button>
    <div style={{display:"flex",justifyContent:"center"}}>
        <div >
          <form >
            <div>
              <p style={{color:"#031427"}} >Edit Job Application Job</p>
              <label htmlFor="" style={{color:"#031427"}} >
                Application For*
              </label>
              <br />
              <select name="job"  className="EditSelect">
                <option value="">Select Job</option>
                <option value="Job A">Job A</option>
                <option value="Job B">Job B</option>
                <option value="Job C">Job C</option>
                <option value="Job D">Job D</option>
              </select>
            </div>

            <div>
              <p style={{color:"#031427"}}>Personal Data</p>
              <div className="editContainer">
                <div className="editRow">
                  <div className="editRow1">
                       <label htmlFor="" style={{color:"#031427"}}>
                         First name *
                       </label>
                       <input type="text" name="firstname"   className="input"/>
                  </div>

                  <div className="editRow1">
                       <label htmlFor="" style={{color:"#031427"}}>
                         Family name *
                       </label>
                       <input type="text" name="familyname" className="input" />
                  </div>

                </div>

                <div className="editRow">

                  <div  className="editRow1">
                        <label htmlFor="" style={{color:"#031427"}} >
                          Citizenship *
                        </label>
                        <input type="text" name="citizenship" className="input" />
                  </div>

                  <div  className="editRow1">
                        <label htmlFor="" style={{color:"#031427"}} >
                          Date of birth *
                        </label>
                        <input type="date" name="dateofbirth"  className="input"/>
                  </div>

                </div>

              <div className="editRow" >
                <div className="editRow1">
                     <label htmlFor="" style={{color:"#031427"}} >
                       Address *
                     </label>
                     <br />
                     <input
                       type="text"
                       name="address"
                       className="inputaddress"
                     />
                </div>  

              </div>

                  <div  className="editRow">
                        <div className="editRow1">
                             <label htmlFor="" style={{color:"#031427"}}>
                               Email address *
                             </label>
                             <input type="text" name="email"  className="input"/>
                        </div>

                        <div  className="editRow1">
                            <label htmlFor="" style={{color:"#031427"}}>
                              Phone *
                            </label>
                            <input type="text" name="phone"  className="input"/>
                        </div>
                  </div>

                <div className="editRow">

                  <div className="editRow1">
                      <label htmlFor="" style={{color:"#031427"}}>
                        Zip Code *
                      </label>
                      <input type="text" name="zipcode"  className="input"/>
                  </div>  

                  <div className="editRow1">
                      <label htmlFor="" style={{color:"#031427"}} >
                        City *
                      </label>
                      <input type="text" name="city" className="input" />
                  </div>

                </div>
      
              <div>
                <p style={{color:"#031427"}}>Application documents</p>
                <div className="editRow">
                  <div className="editRow1">
                    <label htmlFor="" style={{color:"#031427"}}>
                      Application Letter *
                    </label>
                    <input
                      type="file"
                      style={{color:"#031427"}}
                      name="applicationletter"
                    />
                  </div>

                  <div className="editRow1" >
                    <label htmlFor="" style={{color:"#031427"}} >
                      Curriculum vitae *
                    </label>
                    <input
                      type="file"
                      style={{color:"#031427"}}
                      name="curriculumvitae"
                    />
                  </div>
                </div>
              </div>

              <div>
                <p style={{color:"#031427"}}>
                  Possible file types: PDF. Maximum file size: 10 MB.
                </p>
              </div>

              <div>
                <button
                  type="submit"
                >
                  Submit
                </button>
              </div>


              </div>

            </div>
          </form>
        </div>
      </div>

  </div>
</div>
  )
}

        
        </body>
    )
}


export default ApplyRequestTable