import React, {useState} from "react";
import './register.css'

const Register = () => {
  const [isTypingPassword , setIsTypingPassword] = useState(false)
  const [formData , setFormData] = useState({username: '' , email: '' , password: ''})
  const onChange = (e:React.FormEventHandler) => {
    setFormData({...formData , })
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Your form has been submitted successfully")
  }


  return (
    <div className="signUpContainer">
      <form onSubmit={handleFormSubmit}>
        <div>
          <h1 className="emoji">{isTypingPassword ? "🙈 " : " 🙊 "}</h1>
          <h1>Create New Account</h1>
        </div>
        <div className="inputContainer">
          <label htmlFor="username"> Username</label>
          <input
            // value={formData.username}
            name="username"
            type="text"
            placeholder="Eg. Phimomena Potinge"
            autoComplete="on"
            autoCapitalize="true"
            onFocus={(e) => setIsTypingPassword(false)}
            autoFocus
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="telephone">Mobile number</label>
          <input
            // value={formData.email}
            name="email"
            type="email"
            placeholder="Eg. +233 XXX XXX XXX"
            autoComplete="on"
            onFocus={(e) => setIsTypingPassword(false)}
          />
        </div>

        <div>
          <button type="submit" style={{ color: "#334054" , fontWeight: '600' , border: 'none' }}>
            Register Me 🚀
          </button>
          <div className="footer">
            <a href="/login">I already have an account</a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
