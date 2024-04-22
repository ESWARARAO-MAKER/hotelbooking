import './index.css'
import {useNavigate} from 'react-router-dom'
import { FaBed, FaCar, FaPlane, FaTaxi } from "react-icons/fa";
import { MdAttractions } from "react-icons/md";

export const Header = () => {
    const navigate = useNavigate()
    const goToHome = () => {
        navigate("/")
    }
    return(
        <div className = "header">
            <nav className = "navbar">
                <span className = "logo" onClick={goToHome}>B<span>OOK</span>ING</span>
                <div className = "nav-links">
                    <button>Register</button>
                    <button>Login</button>
                </div>
            </nav>
            <div className = "services">
                <button className = "service-button"><FaBed/> Stays</button>
                <button className = "service-button"><FaPlane/> Flights</button>
                <button className = "service-button"><FaCar/> Car rentals</button>
                <button className = "service-button"><MdAttractions/> Attractions</button>
                <button className = "service-button"><FaTaxi/> Airport taxies</button>
            </div>
        </div>
    )
}