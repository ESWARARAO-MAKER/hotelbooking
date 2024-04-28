import './index.css'
import {useNavigate} from 'react-router-dom'
import { FaBed, FaCar, FaPlane, FaTaxi } from "react-icons/fa";
import { MdAttractions } from "react-icons/md";
import { useState } from 'react';
import { IoPersonCircle } from "react-icons/io5";

export const Header = () => {
    const navigate = useNavigate()
    const [isLoggedin, setIsLoggedin] = useState(false)

    const goToHome = () => {
        navigate("/")
    }

    const onLogin = () => {
        navigate("/login")
    }

    const onLogout = () => {
        setIsLoggedin(false)
        navigate("/login")
    }


    return(
        <div className = "header">
            <nav className = "navbar">
                <span className = "logo" onClick={goToHome}>B<span>OOK</span>ING</span>
                {!isLoggedin && <div className = "nav-links">
                    <button className='btn'>Register</button>
                    <button onClick={onLogin} className='btn'>Login</button>
                </div>}
                {isLoggedin &&
                    <div className = "nav-links">
                        <IoPersonCircle className='user'/>
                        <button onClick={onLogout} className='btn'>Logout</button>
                    </div>
                }
            </nav>
            <div className = "services">
                <button className = "service-button" id='active'><FaBed/> Stays</button>
                <button className = "service-button"><FaPlane/> Flights</button>
                <button className = "service-button"><FaCar/> Car rentals</button>
                <button className = "service-button"><MdAttractions/> Attractions</button>
                <button className = "service-button"><FaTaxi/> Airport taxies</button>
            </div>
        </div>
    )
}