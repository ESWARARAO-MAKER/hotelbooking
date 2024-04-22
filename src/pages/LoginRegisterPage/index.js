import './index.css'
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { credentials } from './credentials';

export const LoginRegisterPage = () => {
    const navigate = useNavigate()
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const onLoginClick = () => {
        if (userName === credentials[0].username){
            if (password === credentials[0].password){
                navigate("/", {state : {loggedin : true}})
            }
            else{
                alert("Invalid username or password")
            }
        }
        else{
            alert("Invalid username")
        }
    }

    return(
        <div className='login-registration'>
            <div className = "login-box">
                <form action = "">
                    <h2 className='login-name'>Login</h2>
                    <div className = "input-box">
                        <span className = "icon"><MdOutlineMailOutline/></span>
                        <input type='email' required = "required" onChange={(e) => setUserName(e.target.value)}/>
                        <label>Email</label>
                    </div>
                    <div className = "input-box">
                        <span className = "icon"><CiLock/></span>
                        <input type='password' required = "required" onChange={(e) => setPassword(e.target.value)}/>
                        <label>password</label>
                    </div>
                    <div className='remember-forgot'>
                        <label><input type='checkbox'/> Rememver me</label>
                        <a href='https://main--preeminent-seahorse-714d58.netlify.app/#'>Forgot Password</a>
                    </div>
                    <button type = "submit" className='login-btn' onClick={onLoginClick}>Login</button>
                    <div className='registration-link'>
                        <p>Dont't have an account <a href='https://main--preeminent-seahorse-714d58.netlify.app/#'>Register</a></p>
                    </div>
                </form>
            </div>
        </div>
    )
}