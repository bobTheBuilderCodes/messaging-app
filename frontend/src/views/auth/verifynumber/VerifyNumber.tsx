import React, { useState } from "react";
import "./verify.css";

const VerifyNumber = () => {
  const [isTypingPassword, setIsTypingPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const onChange = (e: React.FormEventHandler) => {
    setFormData({ ...formData });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Your form has been submitted successfully");
  };

  return (
    <div className="signUpContainer">
      <form onSubmit={handleFormSubmit}>
        <div>
          <h1 className="emoji">{isTypingPassword ? "🙈 " : " 🙊 "}</h1>
          <h1>Verify your number</h1>
        </div>
        <div className="verifyContainer">
          <input
            // value={formData.username}
            className="verify"
            name="username"
            type="text"
            placeholder="X"
            autoComplete="on"
            autoCapitalize="true"
            onFocus={(e) => setIsTypingPassword(false)}
            autoFocus
          />
          <input
            // value={formData.username}
            className="verify"
            name="username"
            type="text"
            placeholder="X"
            autoComplete="on"
            autoCapitalize="true"
            onFocus={(e) => setIsTypingPassword(false)}
            autoFocus
          />
          <input
            // value={formData.username}
            className="verify"
            name="username"
            type="text"
            placeholder="X"
            autoComplete="on"
            autoCapitalize="true"
            onFocus={(e) => setIsTypingPassword(false)}
            autoFocus
          />
          <input
            // value={formData.username}
            className="verify"
            name="username"
            type="text"
            placeholder="X"
            autoComplete="on"
            autoCapitalize="true"
            onFocus={(e) => setIsTypingPassword(false)}
            autoFocus
          />
        </div>

        <div>
          <button
            type="submit"
            style={{ color: "#334054", fontWeight: "600", border: "none" }}
          >
            Verify Me 🚀
          </button>
          <div className="footer">
            <a href="/">I don't have an account</a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default VerifyNumber;
