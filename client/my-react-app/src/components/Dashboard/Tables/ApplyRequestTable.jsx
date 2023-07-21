import "./ApplyRequest.scss";
import { useState, useEffect } from "react";
import axios from "axios";

const ApplyRequestTable = () => {
  const [getApplied, setGetApplied] = useState([]);
  const [modal, setModal] = useState(false);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [editFormData, setEditFormData] = useState({
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
    applicationLetter: null,
    curriculumVitae: null,
  });

  const toggleModel = (application) => {
    setSelectedApplication(application);
    setEditFormData({
      job: application.job,
      firstname: application.firstname,
      familyname: application.familyname,
      citizenship: application.citizenship,
      dateofbirth: application.dateofbirth,
      address: application.address,
      email: application.email,
      phone: application.phone,
      zipcode: application.zipcode,
      city: application.city,
      applicationLetter: null,
      curriculumVitae: null,
    });
    setModal(!modal);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setEditFormData((prevData) => ({
      ...prevData,
      [name]: files[0],
    }));
  };




  const handleSubmit = (e) => {
    e.preventDefault();
    const applicationId = selectedApplication._id;
    const formDataToSend = new FormData();
    formDataToSend.append("job", editFormData.job);
    formDataToSend.append("firstname", editFormData.firstname);
    formDataToSend.append("familyname", editFormData.familyname);
    formDataToSend.append("citizenship", editFormData.citizenship);
    formDataToSend.append("dateofbirth", editFormData.dateofbirth);
    formDataToSend.append("address", editFormData.address);
    formDataToSend.append("email", editFormData.email);
    formDataToSend.append("phone", editFormData.phone);
    formDataToSend.append("zipcode", editFormData.zipcode);
    formDataToSend.append("city", editFormData.city);
    formDataToSend.append("applicationLetter", editFormData.applicationLetter);
    formDataToSend.append("curriculumVitae", editFormData.curriculumVitae);

    axios
      .put(`https://employeemanagementsystem-nid5.onrender.com/api/v1/update-OneApplied/${applicationId}`, formDataToSend)
      .then((res) => {
        console.log(res.status, res.data);
        fetchData(); // Fetch updated data after form submission
        setModal(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

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

  useEffect(() => {
    fetchData();
  }, []);

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const handleDelete = (applicationId) => {
    const shouldDelete = window.confirm("Are you sure you want to delete this item?");
    if (shouldDelete) {
      axios
        .delete(`https://employeemanagementsystem-nid5.onrender.com/api/v1/deleteAllapplied/${applicationId}`)
        .then((res) => {
          console.log(res.status, res.data);
          fetchData(); // Fetch updated data after successful deletion
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <body style={{ height: "auto" }}>
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
                <th colSpan="2" data-table="Action">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {getApplied.map((item, index) => (
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
                    <button onClick={() => toggleModel(item)} className="btn_edi" data-table="Edit">
                      Edit
                    </button>
                    <button onClick={() => handleDelete(item._id)} className="btn_tras" data-table="Delete">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {modal && (
        <div className="model">
          <div onClick={toggleModel} className="overlay"></div>
          <div className="model-content">
            <button className="closeButton" onClick={toggleModel}>
              close
            </button>
            <br />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div>
                <form onSubmit={handleSubmit}>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <label htmlFor="" style={{ color: "black", fontWeight: "900" }}>
                      Application For*
                    </label>

                    <select
                      name="job"
                      className="EditSelect"
                      value={editFormData.job}
                      onChange={handleEditChange}
                    >
                      <option value="">Select Job</option>
                      <option value="Job A">Job A</option>
                      <option value="Job B">Job B</option>
                      <option value="Job C">Job C</option>
                      <option value="Job D">Job D</option>
                    </select>
                  </div>

                  <div>
                    <p style={{ color: "black", fontWeight: "900" }}>Personal Data</p>

                    <div className="editContainer">
                      <div className="editRow">
                        <div className="editRow1">
                          <label htmlFor="">First name *</label>
                          <input
                            type="text"
                            name="firstname"
                            className="input"
                            value={editFormData.firstname}
                            onChange={handleEditChange}
                          />
                        </div>

                        <div className="editRow1">
                          <label htmlFor="">Family name *</label>
                          <input
                            type="text"
                            name="familyname"
                            className="input"
                            value={editFormData.familyname}
                            onChange={handleEditChange}
                          />
                        </div>
                      </div>

                      <div className="editRow">
                        <div className="editRow1">
                          <label htmlFor="">Citizenship *</label>
                          <input
                            type="text"
                            name="citizenship"
                            className="input"
                            value={editFormData.citizenship}
                            onChange={handleEditChange}
                          />
                        </div>

                        <div className="editRow1">
                          <label htmlFor="">Date of birth *</label>
                          <input
                            type="date"
                            name="dateofbirth"
                            className="input"
                            value={editFormData.dateofbirth}
                            onChange={handleEditChange}
                          />
                        </div>
                      </div>

                      <div className="editRow">
                        <div className="editRow1">
                          <label htmlFor="">Address *</label>
                          <br />
                          <input
                            type="text"
                            name="address"
                            className="inputaddress"
                            value={editFormData.address}
                            onChange={handleEditChange}
                          />
                        </div>
                      </div>

                      <div className="editRow">
                        <div className="editRow1">
                          <label htmlFor="">Email address *</label>
                          <input
                            type="text"
                            name="email"
                            className="input"
                            value={editFormData.email}
                            onChange={handleEditChange}
                          />
                        </div>

                        <div className="editRow1">
                          <label htmlFor="">Phone *</label>
                          <input
                            type="text"
                            name="phone"
                            className="input"
                            value={editFormData.phone}
                            onChange={handleEditChange}
                          />
                        </div>
                      </div>

                      <div className="editRow">
                        <div className="editRow1">
                          <label htmlFor="">Zip Code *</label>
                          <input
                            type="text"
                            name="zipcode"
                            className="input"
                            value={editFormData.zipcode}
                            onChange={handleEditChange}
                          />
                        </div>

                        <div className="editRow1">
                          <label htmlFor="">City *</label>
                          <input
                            type="text"
                            name="city"
                            className="input"
                            value={editFormData.city}
                            onChange={handleEditChange}
                          />
                        </div>
                      </div>

                      <div>
                        <p>Application documents</p>
                        <div className="editRow">
                          <div className="editRow1">
                            <label htmlFor="">Application Letter *</label>
                            <input
                              type="file"
                              className="fileInput"
                              name="applicationLetter"
                              onChange={handleFileChange}
                            />
                          </div>

                          <div className="editRow1">
                            <label htmlFor="">Curriculum vitae *</label>
                            <input
                              type="file"
                              className="fileInput"
                              name="curriculumVitae"
                              onChange={handleFileChange}
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <p>Possible file types: PDF. Maximum file size: 10 MB.</p>
                      </div>

                      <div>
                        <button type="submit" className="submitButtom">
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
      )}
    </body>
  );
};

export default ApplyRequestTable;
