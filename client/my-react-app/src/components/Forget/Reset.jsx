import { useState} from "react";
import axios from "axios";
import PropTypes from "prop-types";
import "./Reset.scss";
import Navigation from "../Navigation/Nav";
import spinner from "./spinner.gif";
import { useNavigate,useParams} from "react-router-dom";

const LoadingSpinnerButton = ({ title, loading, onClick }) => {
  return (
    <button onClick={onClick} className="loading-spinner-button">
      {loading ? <img src={spinner} alt="spinner" className="spinner" /> : title}
    </button>
  );
};

LoadingSpinnerButton.propTypes = {
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

const Reset = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordConfirm, setConfirmPassword] = useState("");

//   useEffect(() => {

//     const validateToken = async () => {
//       try {
//         if (!token) {
//           console.log("No reset token provided.");
//           return;
//         }

//         // Call an API endpoint to validate the token (You need to implement this API)
//         const response = await axios.post(`/validate-reset-token/${token}`);
//         const { isValid } = response.data;

//         if (isValid) {
//           console.log("Reset token is valid.");
//         } else {
//           console.log("Reset token is invalid or expired.");
//           // Redirect the user to an error page or handle invalid tokens as needed

//         }
//       } catch (error) {
//         console.error("Error while validating reset token:", error);
//       }
//     };

//     validateToken();
//   }, [token]);


const {token} = useParams()
  const handleReset = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(`http://localhost:5558/api/v1/reset-password/${token}`, {
        password,
        passwordConfirm,
      });
      console.log(response.data);
      setShowPopup(true);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const navigate = useNavigate();

  const HandleNavigateExplore = () => {
    navigate("/Login");
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
      <div className="containerLoginPassword">
        <center>
          <div className="rowContainer">
            <div className="Login">
              <h1 className="Loginupheader">Reset Password</h1>
              <form onSubmit={handleReset}>
                <br />
                <input
                  type="password"
                  name="password"
                  className="password"
                  placeholder="New Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <input
                  type="password"
                  name="passwordConfirm"
                  className="password"
                  placeholder="Confirm Password"
                  value={passwordConfirm}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />

                <br />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    gap: "10px",
                  }}
                >
                  <LoadingSpinnerButton
                    title="Reset Password"
                    loading={loading}
                    onClick={handleReset}
                  />
                  <button
                    style={{
                      border: "none",
                      padding: "10px",
                      fontWeight: "800",
                      cursor: "pointer",
                      borderRadius: "5px",
                      textTransform: "uppercase",
                      backgroundColor: "#03346b",
                      color: "white",
                    }}
                    onClick={HandleNavigateExplore}
                  >
                    Back To Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </center>
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Password Reset Please Press Login To back Login With New Password You create</h2>
            <button className="popup-close" onClick={closePopup}>
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
};

Reset.propTypes = {
  token: PropTypes.string.isRequired,
};

export default Reset;
