import "./register.css";
import {useNavigate} from 'react-router-dom'

const Register = () => {

  const navigate = useNavigate()

  const onLoginBtn = () => {
    navigate("/login")
  }

  return (
    <div className="login">
      <div className="lContainer">
        <input
          type="text"
          placeholder="username"
          id="username"
          className="lInput"
        />
        <input
          type="email"
          placeholder="Enter your mail"
          id="mail"
          className="lInput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          className="lInput"
        />
        <input
          type="password"
          placeholder="confirm password"
          id="password"
          className="lInput"
        />
        <button className="lButton">
          Register
        </button>
        <p>Already have an account <span className = "reg-login" onClick = {onLoginBtn}>Login</span></p>
      </div>
    </div>
  );
};

export default Register;