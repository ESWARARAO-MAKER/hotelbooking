import React from "react";
import "./searchItem.css";
import { Link } from "react-router-dom";

export default function SearchItem(){
    return (
        <div className="searchItem">
            <img src="https://t3.ftcdn.net/jpg/02/71/08/28/360_F_271082810_CtbTjpnOU3vx43ngAKqpCPUBx25udBrg.jpg" alt="" className="siImg"/>
            <div className="siDesc">
                <h1 className="siTitle">Tower Street Apartments</h1>
                <span className="siDistance">500m from center</span>
                <span className="siTaxiOp">Free Airport Taxi</span>
                <span className="siSubtitle">Studio Apartment with Air Conditioning</span>
                <span className="siFeatures">Entire studio * 1 bathroom 21m² 1 full bed</span>
                <span className="siCancelOp">Free cancelation</span>
                <span className="siCancelOpSubtitle">You can cancel later, so lock in this great price today</span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="siDetailsTexts">
                    <span className="siPrice">$123</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <Link to="/hotels/:id">
                        <button className="siCheckButton">See availability</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}