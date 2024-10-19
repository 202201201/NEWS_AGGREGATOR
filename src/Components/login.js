import React, { useState, useEffect } from "react";
import "../CSS/login.css"; // Import the CSS file
const Login = () => {
  const [captcha, setCaptcha] = useState("");
  const [userInput, setUserInput] = useState("");
  const [captchaStatus, setCaptchaStatus] = useState("");

  // Generate a new captcha when the component mounts
  useEffect(() => {
    generateCaptcha();
  }, []);

  // Generate a new captcha
  const generateCaptcha = () => {
    const randomChar =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*";
    let uniqueChar = "";
    for (let i = 0; i < 5; i++) {
      uniqueChar += randomChar.charAt(
        Math.floor(Math.random() * randomChar.length)
      );
    }
    setCaptcha(uniqueChar);
    setUserInput(""); // Clear input field
  };

  // Check if the user input matches the captcha
  const handleLogin = (e) => {
    e.preventDefault();
    console.log( userInput );
    console.log( captcha );
    if (userInput === captcha) {
      setCaptchaStatus("Matched");
    } else {
      setCaptchaStatus("Not Matched");
    }
    generateCaptcha(); // Generate a new captcha whether matched or not
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="captcha-container">
            <div>
              <label htmlFor="captcha">Captcha</label>
              <input
                type="text"
                id="captcha"
                name="captcha"
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Enter Captcha Code"
                value={userInput}
                required
              />
            </div>

            <div className="captcha-code">
              <span>{captcha}</span> {/* Display Captcha */}
            </div>
            <div className="captcha-refresh" onClick={generateCaptcha}>
              <i className="fas fa-sync-alt"></i> {/* Refresh Icon */}
            </div>

            <p id="key">{captchaStatus}</p>
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
          <div style={{display:"flex",alignItems: "center"}}>
          <p>You Have Not Account?</p>
          <a href="/signup">Sign Up</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
