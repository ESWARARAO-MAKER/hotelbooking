import './index.css'
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { useContext, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';

export const LoginRegisterPage = () => {
    const navigate = useNavigate()
    const [credentials, setCredentials] = useState({
        username : undefined,
        password : undefined,
    });

    const {loading, error, dispatch} = useContext(AuthContext);

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
      };

    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
          const res = await axios.post("https://hotelbooking-q4vk.onrender.com/api/auth/login", credentials);
          //console.log(res)
          dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
          navigate("/")
        } catch (err) {
          dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
        }
      };

    // const onLoginClick = () => {
    //     if (userName === credentials[0].username){
    //         if (password === credentials[0].password){
    //             navigate("/", {state : {loggedin : true}})
    //         }
    //         else{
    //             alert("Invalid username or password")
    //         }
    //     }
    //     else{
    //         alert("Invalid username")
    //     }
    // }

    return(
        <div className='login-registration'>
            <div className = "login-box">
                <form action = "">
                    <h2 className='login-name'>Login</h2>
                    <div className = "input-box">
                        <span className = "icon"><MdOutlineMailOutline/></span>
                        <input type='email' id='username' required = "required" onChange={handleChange}/>
                        <label>Email</label>
                    </div>
                    <div className = "input-box">
                        <span className = "icon"><CiLock/></span>
                        <input type='password' id='password' required = "required" onChange={handleChange}/>
                        <label>password</label>
                    </div>
                    <div className='remember-forgot'>
                        <label><input type='checkbox'/> Rememver me</label>
                        <a href='https://main--preeminent-seahorse-714d58.netlify.app/#'>Forgot Password</a>
                    </div>
                    <button type = "submit" disabled = {loading} className='login-btn' onClick={handleClick}>Login</button>
                    <div className='registration-link'>
                        <p>Dont't have an account <a href='https://main--preeminent-seahorse-714d58.netlify.app/#'>Register</a></p>
                        {error && <span style={{color : "red"}}>{error.message}</span>}
                    </div>
                </form>
            </div>
        </div>
    )
}