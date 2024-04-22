import './index.css'

export const Email = () => {
    return(
        <div className = "email">
            <div className = "email-container">
                <h1>Save time, Save money</h1>
                <span>Signup and we'll send the best deals to you</span>
                <div className = "email-input-container">
                    <input type = "email" placeholder = "Your Email"/>
                    <button>Subscribe</button>
                </div>
            </div>
        </div>
    )
}