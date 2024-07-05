import './index.css'
import {Link, useNavigate} from 'react-router-dom'
import { FaBed, FaCar, FaPlane, FaTaxi } from "react-icons/fa";
import { MdAttractions } from "react-icons/md";
import { useContext } from 'react';
import { IoPersonCircle } from "react-icons/io5";
import { AuthContext } from '../../context/AuthContext';

export const Header = () => {
    const navigate = useNavigate()

    const goToHome = () => {
        navigate("/")
    }

    const onLogin = () => {
        navigate("/login")
    }

    const onLogout = () => {
        localStorage.removeItem("user");
        navigate("/login")
    }

    const {user} = useContext(AuthContext)
    console.log(user)


    return(
        <div className = "header">
            <nav className = "navbar">
                <span className = "logo" onClick={goToHome}>B<span>OOK</span>ING</span>
                {!user && <div className = "nav-links">
                    <button className='btn'>Register</button>
                    <button onClick={onLogin} className='btn'>Login</button>
                </div>}
                {user &&
                    <div className = "nav-links">
                        <IoPersonCircle className='user'/>
                        <button onClick={onLogout} className='btn'>Logout</button>
                    </div>
                }
            </nav>
            <div className = "services">
                <Link to="/" className='link'><button className = "service-button" id='active'><FaBed/> Stays</button></Link>
                <Link to='/inProgress' className='link'><button className = "service-button"><FaPlane/> Flights</button></Link>
                <Link to="/inProgress" className='link'><button className = "service-button"><FaCar/> Car rentals</button></Link>
                <Link to="/inProgress" className='link'><button className = "service-button"><MdAttractions/> Attractions</button></Link>
                <Link to="/inProgress" className='link'><button className = "service-button"><FaTaxi/> Airport taxies</button></Link>
            </div>
        </div>
    )
}