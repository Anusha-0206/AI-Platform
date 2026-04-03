import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="card">
        <h2 className="title">Sign In</h2>

        <label className="label">Email</label>
        <div className="inputBox">
          <input type="email" placeholder="Email" />
          <span className="icon">✉️</span>
        </div>

        <label className="label">Password</label>
        <div className="inputBox">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
          />
          <span className="icon" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? "🙈" : "👁"}
          </span>
        </div>

        <p className="forgot" onClick={() => navigate("/forgot")}>
          Forgot Password?
        </p>

        <button className="button">Sign In</button>

        <p className="footer">
          Are you a new member?{" "}
          <span onClick={() => navigate("/signup")}>Sign Up</span>
        </p>
      </div>
    </div>
  );
}
