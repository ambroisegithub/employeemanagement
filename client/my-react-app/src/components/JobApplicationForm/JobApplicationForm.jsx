import { useState } from "react";
import Nav from "../Navigation/Nav";
import axios from "axios";
import "./JobApplicationForm.scss";

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
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
    applicationletter: null,
    curriculumvitae: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("job", formData.job);
    formDataToSend.append("firstname", formData.firstname);
    formDataToSend.append("familyname", formData.familyname);
    formDataToSend.append("citizenship", formData.citizenship);
    formDataToSend.append("dateofbirth", formData.dateofbirth);
    formDataToSend.append("address", formData.address);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("zipcode", formData.zipcode);
    formDataToSend.append("city", formData.city);
    formDataToSend.append("applicationLetter", formData.applicationletter);
    formDataToSend.append("curriculumVitae", formData.curriculumvitae);

    axios
      .post("https://employeemanagementsystem-nid5.onrender.com/api/v1/upload", formDataToSend)
      .then((res) => {
        console.log(res.status, res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <Nav />
      <br />
      <br />
      <br />
      <div
        style={{
          width: "100%",
          backgroundColor: "#1a5e5f",
          height: "auto",
          color: "white",
          paddingTop: "50px",
          display: "flex",
          justifyContent: "center",
          fontWeight: "900",
          fontSize: "25px",
        }}
      >
        <h1>Job Application Form</h1>
      </div>
      <div className="application_container">
        <div className="jobContainer" style={{ width: "80%", height: "auto" }}>
          <form onSubmit={handleSubmit}>
            <div className="JobcontainerOne" style={{ display: "flex", flexDirection: "column" }}>
              <p style={{ fontWeight: "900", fontSize: "26px", marginBottom: "10px" }}>Job</p>
              <label htmlFor="" style={{ fontWeight: "900", fontSize: "15px", marginBottom: "5px" }}>
                Application For*
              </label>
              <br />
              <select name="job" value={formData.job} id="" className="selectContainer" onChange={handleChange}>
                <option value="">Select Job</option>
                <option value="Job A">Job A</option>
                <option value="Job B">Job B</option>
                <option value="Job C">Job C</option>
                <option value="Job D">Job D</option>
              </select>
            </div>

            <div>
              <p style={{ fontWeight: "900", fontSize: "26px", marginBottom: "10px" }}>Personal Data</p>
              <div className="jobrow">
                <div className="jobrow1" style={{ display: "flex", flexDirection: "column" }}>
                  <label htmlFor="" style={{ fontWeight: "900", fontSize: "15px", marginBottom: "5px" }}>
                    First name *
                  </label>
                  <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} />

                  <label htmlFor="" style={{ fontWeight: "900", fontSize: "15px", marginBottom: "5px" }}>
                    Family name *
                  </label>
                  <input type="text" name="familyname" value={formData.familyname} onChange={handleChange} />
                </div>

                <div className="jobrow1" style={{ display: "flex", flexDirection: "column" }}>
                  <label htmlFor="" style={{ fontWeight: "900", fontSize: "15px", marginBottom: "5px" }}>
                    Citizenship *
                  </label>
                  <input type="text" name="citizenship" value={formData.citizenship} onChange={handleChange} />

                  <label htmlFor="" style={{ fontWeight: "900", fontSize: "15px", marginBottom: "5px" }}>
                    Date of birth *
                  </label>
                  <input type="date" name="dateofbirth" value={formData.dateofbirth} onChange={handleChange} />
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column" }}>
                <label htmlFor="" style={{ fontWeight: "900", fontSize: "15px", marginBottom: "5px" }}>
                  Address *
                </label>
                <br />
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  className="address"
                  style={{ marginBottom: "25px" }}
                  onChange={handleChange}
                />
              </div>

              <div className="jobrow">
                <div className="jobrow1" style={{ display: "flex", flexDirection: "column" }}>
                  <label htmlFor="" style={{ fontWeight: "900", fontSize: "15px", marginBottom: "5px" }}>
                    Email address *
                  </label>
                  <input type="text" name="email" value={formData.email} onChange={handleChange} />

                  <label htmlFor="" style={{ fontWeight: "900", fontSize: "15px", marginBottom: "5px" }}>
                    Phone *
                  </label>
                  <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
                </div>

                <div className="jobrow1" style={{ display: "flex", flexDirection: "column" }}>
                  <label htmlFor="" style={{ fontWeight: "900", fontSize: "15px", marginBottom: "5px" }}>
                    Zip Code *
                  </label>
                  <input type="text" name="zipcode" value={formData.zipcode} onChange={handleChange} />

                  <label htmlFor="" style={{ fontWeight: "900", fontSize: "15px", marginBottom: "5px" }}>
                    City *
                  </label>
                  <input type="text" name="city" value={formData.city} onChange={handleChange} />
                </div>
              </div>

              <div>
                <p style={{ fontWeight: "900", fontSize: "26px", marginBottom: "15px" }}>Application documents</p>
                <div className="applicationContainer" style={{ display: "flex", flexDirection: "raw", gap: "18px" }}>
                  <div className="application" style={{ display: "flex", flexDirection: "column", marginBottom: "20px" }}>
                    <label htmlFor="" style={{ fontWeight: "900", fontSize: "15px", marginBottom: "10px" }}>
                      Application Letter *
                    </label>
                    <input
                      type="file"
                      className="chooseImage"
                      name="applicationletter"
                      style={{ marginBottom: "10px" }}
                      onChange={handleFileChange}
                    />
                  </div>

                  <div className="application" style={{ display: "flex", flexDirection: "column", marginBottom: "20px" }}>
                    <label htmlFor="" style={{ fontWeight: "900", fontSize: "15px", marginBottom: "10px" }}>
                      Curriculum vitae *
                    </label>
                    <input
                      type="file"
                      className="chooseImage"
                      name="curriculumvitae"
                      style={{ marginBottom: "10px" }}
                      onChange={handleFileChange}
                    />
                  </div>
                </div>
              </div>

              <div>
                <p style={{ fontWeight: "900", fontSize: "15px", marginBottom: "10px" }}>
                  Possible file types: PDF. Maximum file size: 10 MB.
                </p>
              </div>

              <div>
                <button
                  type="submit"
                  style={{
                    padding: "10px",
                    marginTop: "10px",
                    borderRadius: "10px",
                    width: "200px",
                    fontWeight: "900",
                    outline: "none",
                    border: "none",
                    boxShadow: "0px 0px 2px 3px rgba(0,0,0,0.3)",
                    cursor: "pointer",
                  }}
                >
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
