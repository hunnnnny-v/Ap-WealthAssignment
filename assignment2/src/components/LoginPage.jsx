/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import  { useState } from "react";
import "../styles/login.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import fingerprint from "../assets/fingerprint.png";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberPassword, setRememberPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true); // State for toggling between login and register

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
};

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>{isLogin ? "Login" : "Register"}</h2>
        
        <p>
          By signing in you are agreeing to our{" "}
          <a href="#">Term and privacy policy</a>
        </p>

        <div className="tab-selector">
          <button
            className={isLogin ? "active-tab" : ""}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={!isLogin ? "active-tab" : ""}
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className="show-password">👁️</span>
          </div>
          
          <div className="extras">
            <label className="remember">
              <input
                type="checkbox"
                checked={rememberPassword}
                onChange={() => setRememberPassword(!rememberPassword)}
              />
              Remember password
            </label>
            <a href="#" className="forgot-password">Forget password</a>
          </div>

          <button type="submit" className="login-button">
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        <div className="social-login">
          <p>or connect with</p>
          <div className="social-icons">
            <a href="#"><FontAwesomeIcon icon="fa-brands fa-pinterest" /></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-pinterest"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>

        {/* <div className="fingerprint-login">
          <img  src="../assets/fingerprint.png"/>
        </div> */}
      </div>
    </div>
  );
};

export default LoginPage;
