import React from "react";
import "./mailList.css";

export default function MailList(){
    return (
        <div className="mail">
            <h1 className="mailTitle">Save Time, Save Money!</h1>
            <span className="mailDesc">Signup and we'll send the best deals to you</span>
            <div className="mailInputContainer">
                <input type="text" placeholder="Your mail"/>
                <button className="subscribeBtn">Subscribe</button>
            </div>
        </div>
    )
}