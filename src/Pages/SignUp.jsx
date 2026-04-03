import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate(); // ✅ navigation

  return (
    <div className="container">
      <div className="card">
        <h2 className="title">Sign Up</h2>

        {/* Full Name */}
        <label className="label">Full Name</label>
        <div className="inputBox">
          <input type="text" placeholder="Full Name" />
          <span className="icon">👤</span>
        </div>

        {/* Email */}
        <label className="label">Email</label>
        <div className="inputBox">
          <input type="email" placeholder="Email" />
          <span className="icon">✉️</span>
        </div>

        {/* Password */}
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

        {/* Checkbox */}
        <div className="checkboxRow">
          <input
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
          <span style={{ marginLeft: "10px", color: "#cbd5e1" }}>
            I agree to Terms & Conditions
          </span>
        </div>

        {/* Button */}
        <button className="button" disabled={!checked}>
          Sign Up
        </button>

        {/* Footer */}
        <p className="footer">
          Already have an account?{" "}
          <span onClick={() => navigate("/signin")}>Sign In</span>
        </p>
      </div>
    </div>
  );
}
