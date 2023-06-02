import React, { useState } from "react";
import "./Login.css";
import Banner from "./asset/Banner.jpg";
import Cross from "./asset/Cross.png";
import Linkedln from "./asset/Linkedln.png";
import Facebook from "./asset/Facebook.png";
import Instagram from "./asset/Instagram.png";
import Earth from "./asset/Earth.png";
import Aesthisia from "./asset/Aesthisia.png";
import Bigdot from "./asset/Bigdot.png";
import Smalldot from "./asset/Smalldot.png";
import Eyeicon from "./asset/Eyeicon.png";
import Petals from "./asset/Petals.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email === "" || password === "") {
      //setErrorMessage("Please fill in all fields.");
      alert("Please fill in all fields.");
      setEmail("");
      setPassword("");
      setErrorMessage("");
    } else if (email !== "aesthisia@gmail.com" || password !== "password") {
      //setErrorMessage("Invalid username or password.");
      alert("Invalid username or password.");
      setEmail("");
      setPassword("");
      setErrorMessage("");
    } else {
      // Successful login
      alert("Login successful!");
      setEmail("");
      setPassword("");
      setErrorMessage("");
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container">
      <div>
        <img className="cross" src={Cross} alt="cross" />
      </div>
      <div>
        <img className="image-banner" src={Banner} alt="banner" />
        <h1 className="banner-text">
          100% Uptime<span className="emoji"></span>
        </h1>
        <p className="banner-text-secondary">Zero Infrastructure</p>
        <p className="banner-text-secondary-two">Management</p>
      </div>
      <div>
        <div>
          <img className="Petals" src={Petals} alt="logo" />
        </div>
        <h1 className="welcome">
          Welcome <span className="back">Back!</span>
        </h1>
        <p className="glad">Glad to see you again!</p>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              className="input-box"
              type="email"
              value={email}
              placeholder="Enter your email"
              onChange={handleEmailChange}
            />
          </div>
          <div>
            <input
              className="password-box"
              type="password"
              value={password}
              placeholder="Enter your password"
              onChange={handlePasswordChange}
            />

            <img
              className="eye-icon"
              src={Eyeicon}
              alt="show"
              onClick={handleTogglePassword}
            />
          </div>

          <p className="forgot-password">
            <a href="/forgot-password" className="forgot-password-link">
              Forgot Password?
            </a>
          </p>
          <button className="button" type="submit">
            <span className="login">Log In</span>
          </button>
        </form>
        <div className="dont">
          <p className="signup-link">
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
        </div>
        <div>{errorMessage && <p className="error">{errorMessage}</p>}</div>
      </div>
      <div className="all-icon">
        <a href="https://www.linkedin.com/company/aesthisia/?originalSubdomain=in">
          <img className="linkedln-icon" src={Linkedln} alt="linkedln" />
        </a>
        <a href="https://www.facebook.com/aesthisia/">
          <img className="facebook-icon" src={Facebook} alt="facebook" />
        </a>
        <a href="https://www.instagram.com/aesthisia/">
          <img className="instagram-icon" src={Instagram} alt="instagram" />
        </a>
        <a href="https://aesthisia.com/">
          <img className="earth-icon" src={Earth} alt="Earth" />
        </a>
        <a href="https://aesthisia.com/">
          <img className="aesthisia" src={Aesthisia} alt="url" />
        </a>
        <img className="bigdot" src={Bigdot} alt="slide" />
        <img className="smalldot" src={Smalldot} alt="slide" />
        <img className="smalldot-b" src={Smalldot} alt="slide" />
      </div>
    </div>
  );
};

export default Login;