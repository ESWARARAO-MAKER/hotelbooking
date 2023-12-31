import { useNavigate } from "react-router-dom"
import Navbar from "../navbar/Navbar"
import "./progress.css"

const Progress = () => {
    const navigate = useNavigate()

    const onBack = () => {
        navigate("/")
    }
    return (
        <>
            <Navbar />
            <div className= "container-working">
                <img src= "https://assets.ccbp.in/frontend/react-js/failure-img.png " alt= "img" className = "working-img"/>
                <span className = "para-working">The page you are looking for is under Progress</span>
                <div>
                    <button className="working-btn" onClick={onBack}>Back To Home</button>
                </div>
            </div>
        </>
    )
}
export default Progress