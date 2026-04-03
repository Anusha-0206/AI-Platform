import "./SignIn.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate(); // ✅ ADD THIS

  return (
    <div className="container">
      <div className="card">
        <h2 className="title">Forgot Password?</h2>

        <p className="infoText">
          Enter your details below to request password reset.
        </p>

        <label className="label">Email</label>
        <div className="inputBox">
          <input type="email" placeholder="Email" />
          <span className="icon">✉️</span>
        </div>

        <div className="checkboxRow">
          <input
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
          <span>I agree to Terms & Conditions</span>
        </div>

        <button className="button" disabled={!checked}>
          Submit
        </button>

        {/* 🔥 FIXED BUTTON */}
        <p
          className="footer"
          onClick={() => navigate("/signin")} /* ✅ FIX */
          style={{ cursor: "pointer" }}
        >
          Back to Sign In
        </p>
      </div>
    </div>
  );
}
