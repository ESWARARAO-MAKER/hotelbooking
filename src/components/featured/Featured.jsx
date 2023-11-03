import React from "react";
import "./featured.css";


export default function Featured(){
    return (
        <div className="featured">
            <div className="featuredItem">
                <img src="https://plus.unsplash.com/premium_photo-1661963657305-f52dcaeef418?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D" alt="" className="featuredImg"/>
                <div className="featuredTitles">
                    <h1>Hyderabad</h1>
                    <h2>90 Properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://images.unsplash.com/photo-1565297032488-90722f09db62?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhdXRpZnVsJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D" alt="" className="featuredImg"/>
                <div className="featuredTitles">
                    <h1>Visakhapatnam</h1>
                    <h2>140 Properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJlYXV0aWZ1bCUyMGJ1aWxkaW5nfGVufDB8fDB8fHww" alt="" className="featuredImg"/>
                <div className="featuredTitles">
                    <h1>Vijayawada</h1>
                    <h2>118 Properties</h2>
                </div>
            </div>
        </div>
    )
}