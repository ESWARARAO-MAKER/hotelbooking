import { useNavigate } from "react-router-dom"
import "./index.css"
import { Header } from "../Header"

const Progress = () => {
    const navigate = useNavigate()

    const onBack = () => {
        navigate("/")
    }
    return (
        <>
            <Header />
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