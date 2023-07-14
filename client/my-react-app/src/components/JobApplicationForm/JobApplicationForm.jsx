import  { useState } from "react";
import Nav from "../Navigation/Nav";
import "./JobApplicationForm.scss";

const JobApplicationForm = () => {
  const initialFormData = {
    job: "",
    firstname: "",
    familyname: "",
    citizenship: "",
    dateofbirth: "",
    address: "",
    email: "",
    phone: "",
    zipcode: "",
    city: "",
    applicationletter: "",
    curriculumvitae: ""
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = {};

    if (!formData.job) {
      formErrors.job = "Job Field Should Not Be Empty";
    }

    if (!formData.firstname) {
      formErrors.firstname = "First Name Field Should Not Be Empty";
    }

    if (!formData.familyname) {
      formErrors.familyname = "Family Name Field Should Not Be Empty";
    }

    if (!formData.citizenship) {
      formErrors.citizenship = "Citizenship Field Should Not Be Empty";
    }

    if (!formData.dateofbirth) {
      formErrors.dateofbirth = "Date Of Birth Field Should Not Be Empty";
    }

    if (!formData.address) {
      formErrors.address = "Address Field Should Not Be Empty";
    }

    if (!formData.email) {
      formErrors.email = "Email Field Should Not Be Empty";
    }

    if (!formData.phone) {
      formErrors.phone = "Phone Field Should Not Be Empty";
    }

    if (!formData.zipcode) {
      formErrors.zipcode = "Zipcode Field Should Not Be Empty";
    }

    if (!formData.city) {
      formErrors.city = "City Field Should Not Be Empty";
    }

    if (!formData.applicationletter) {
      formErrors.applicationletter = "Application Letter Field Should Not Be Empty";
    }

    if (!formData.curriculumvitae) {
      formErrors.curriculumvitae = "Curriculum Vitae Field Should Not Be Empty";
    }

    if (Object.keys(formErrors).length === 0) {
      // Submit the form data
      console.log("Form submitted:", formData);
      setFormData(initialFormData);
      resetForm();
      // Reset form data to initial state
    } else {
      // Set the form errors
      setErrors(formErrors);
    }
  };


  const resetForm = () => {
    setFormData(initialFormData);
    setErrors({});
  };

  return (
    <div>
      <Nav />
      <br />
      <br />

      <br />

      <div style={{ width: "100%", backgroundColor: "#1a5e5f", height: "auto", color: "white", paddingTop: "50px", display: "flex", justifyContent: "center", fontWeight: "900", fontSize: "25px" }}>
        <h1>Job Application Form</h1>
      </div>
      <div className="application_container">
        <div className="jobContainer" style={{ width: "80%", height: "auto" }}>
          <form action="" onSubmit={handleSubmit}>
            <div className="JobcontainerOne" style={{display:"flex",flexDirection:"column"}}>
              <p style={{ fontWeight: "900", fontSize: "26px", marginBottom: "10px" }}>Job</p>
              <label htmlFor="" style={{ fontWeight: "900", fontSize: "15px", marginBottom: "5px" }}>
                Application For*
              </label>
              <br />
              <select name="job" value={formData.job} onChange={handleChange} id="" className="selectContainer">
                <option value="">Select Job</option>
                <option value="Job A">Job A</option>
                <option value="Job B">Job B</option>
                <option value="Job C">Job C</option>
                <option value="Job D">Job D</option>
              </select>
              {errors.job && <span  style={{color:"red"}} className="error">{errors.job}</span>}
            </div>

            <div>
              <p style={{ fontWeight: "900", fontSize: "26px", marginBottom: "10px" }}>Personal Data</p>
              <div className="jobrow">
                <div className="jobrow1" style={{ display: "flex", flexDirection: "column" }}>
                  <label htmlFor="" style={{ fontWeight: "900", fontSize: "15px", marginBottom: "5px" }}>
                    First name *
                  </label>
                  <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} />
                  {errors.firstname && <span  style={{color:"red"}} className="error">{errors.firstname}</span>}

                  <label htmlFor="" style={{ fontWeight: "900", fontSize: "15px", marginBottom: "5px" }}>
                    Family name *
                  </label>
                  <input type="text" name="familyname" value={formData.familyname} onChange={handleChange} />
                  {errors.familyname && <span  style={{color:"red"}} className="error">{errors.familyname}</span>}
                </div>

                <div className="jobrow1" style={{ display: "flex", flexDirection: "column" }}>
                  <label htmlFor="" style={{ fontWeight: "900", fontSize: "15px", marginBottom: "5px" }}>
                    Citizenship *
                  </label>
                  <input type="text" name="citizenship" value={formData.citizenship} onChange={handleChange} />
                  {errors.citizenship && <span  style={{color:"red"}} className="error">{errors.citizenship}</span>}

                  <label htmlFor="" style={{ fontWeight: "900", fontSize: "15px", marginBottom: "5px" }}>
                    Date of birth *
                  </label> 
                  <input type="date" name="dateofbirth" value={formData.dateofbirth} onChange={handleChange} />
                  {errors.dateofbirth && <span  style={{color:"red"}} className="error">{errors.dateofbirth}</span>}
                </div>
              </div>

              <div style={{display:"flex",flexDirection:"column"}}>
                <label htmlFor="" style={{ fontWeight: "900", fontSize: "15px", marginBottom: "5px" }}>
                  Address *
                </label>
                <br />
                <input type="text" name="address" className="address" style={{ marginBottom: "25px" }} value={formData.address} onChange={handleChange} />
                {errors.address && <span style={{color:"red"}} className="error">{errors.address}</span>}
              </div>

              <div className="jobrow">
                <div className="jobrow1" style={{ display: "flex", flexDirection: "column" }}>
                  <label htmlFor="" style={{ fontWeight: "900", fontSize: "15px", marginBottom: "5px" }}>
                    Email address *
                  </label>
                  <input type="text" name="email" value={formData.email} onChange={handleChange} />
                  {errors.email && <span style={{color:"red"}} className="error">{errors.email}</span>}

                  <label htmlFor="" style={{ fontWeight: "900", fontSize: "15px", marginBottom: "5px" }}>
                    Phone *
                  </label>
                  <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
                  {errors.phone && <span  style={{color:"red"}} className="error">{errors.phone}</span>}
                </div>

                <div className="jobrow1" style={{ display: "flex", flexDirection: "column" }}>
                  <label htmlFor="" style={{ fontWeight: "900", fontSize: "15px", marginBottom: "5px" }}>
                    Zip Code *
                  </label>
                  <input type="text" name="zipcode" value={formData.zipcode} onChange={handleChange} />
                  {errors.zipcode && <span  style={{color:"red"}} className="error">{errors.zipcode}</span>}

                  <label htmlFor="" style={{ fontWeight: "900", fontSize: "15px", marginBottom: "5px" }}>
                    City *
                  </label>
                  <input type="text" name="city" value={formData.city} onChange={handleChange} />
                  {errors.city && <span  style={{color:"red"}} className="error">{errors.city}</span>}
                </div>
              </div>

              <div>
                <p style={{ fontWeight: "900", fontSize: "26px", marginBottom: "15px" }}>Application documents</p>
                <div className="applicationContainer" style={{ display: "flex", flexDirection: "raw", gap: "18px" }}>
                  <div className="application" style={{ display: "flex", flexDirection: "column", marginBottom: "20px" }}>
                    <label htmlFor="" style={{ fontWeight: "900", fontSize: "15px", marginBottom: "10px" }}>
                      Application Letter *
                    </label>
                    <input type="file" className="chooseImage" name="applicationletter" value={formData.applicationletter} onChange={handleChange}  style={{marginBottom:"10px"}}/>
                 
                    {errors.applicationletter && <span  style={{color:"red"}} className="error">{errors.applicationletter}</span>}
                  </div>

                  <div className="application" style={{ display: "flex", flexDirection: "column", marginBottom: "20px" }}>
                    <label htmlFor="" style={{ fontWeight: "900", fontSize: "15px", marginBottom: "10px" }}>
                      Curriculum vitae *
                    </label>
                    <input type="file" className="chooseImage" name="curriculumvitae" value={formData.curriculumvitae} onChange={handleChange}  style={{marginBottom:"10px"}}/>
                    
                    {errors.curriculumvitae && <span style={{color:"red"}}  className="error">{errors.curriculumvitae}</span>}
                  </div>
                </div>
              </div>

              <div>
                <p style={{ fontWeight: "900", fontSize: "15px", marginBottom: "10px" }}>
                  Possible file types: PDF. Maximum file size: 10 MB.
                </p>
              </div>

              <div>
                <button type="submit" style={{ padding: "10px", marginTop: "10px", borderRadius: "10px", width: "200px", fontWeight: "900", outline: "none", border: "none", boxShadow: "0px 0px 2px 3px rgba(0,0,0,0.3)", cursor: "pointer" }}>
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobApplicationForm;
