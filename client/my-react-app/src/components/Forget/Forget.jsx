import  { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import "./Forget.scss";
import Navigation from "../Navigation/Nav";
import spinner from "./spinner.gif";

const LoadingSpinnerButton = ({ title, loading, onClick }) => {
  return (
    <button onClick={onClick} className="loading-spinner-button">
      {loading ? (
        <img src={spinner} alt="spinner" className="spinner" />
      ) : (
        title
      )}
    </button>
  );
};
LoadingSpinnerButton.propTypes = {
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
const Forget = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleForget = async (e) => {
    e.preventDefault();
    setEmailError("");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setEmailError("Please provide an email");
    } else if (!emailPattern.test(email)) {
      setEmailError("Please provide a valid email");
    } else {
      try {
        setLoading(true);
        const response = await axios.post("http://localhost:5558/api/v1/forgot-password", { email });
        console.log(response.data);
        setShowPopup(true);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    setEmail("");
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div>
        <Navigation />
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="containerLogin1">
        <center>
          <div className="rowContainer">
            <div className="Login">
              <h1 className="Loginupheader">
                Request To Reset To Change Password
              </h1>
              <form action="" onSubmit={handleForget}>
                <br />
                <input
                  type="text"
                  id="email"
                  className="email"
                  placeholder="Enter Your Email To Confirm Request"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {emailError && <p className="error">{emailError}</p>}
                <br />
                <LoadingSpinnerButton
                  title="request"
                  loading={loading}
                  onClick={handleForget}
                />
              </form>
            </div>
          </div>
        </center>
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Please check your email to confirm password reset</h2>
            <button className="popup-close" onClick={closePopup}>
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Forget;