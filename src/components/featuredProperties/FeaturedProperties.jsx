import React from "react";
import "./featuredProperties.css";


export default function FeaturedProperties(){
    return (
        <div className="fp">
            <div className="fpItem">
                <img src="https://images.unsplash.com/photo-1608198399988-341f712c3711?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsJTIwcm9vbXN8ZW58MHx8MHx8fDA%3D" alt="" className="fpImg"/>
                <span className="fpName">Hotel In</span>
                <span className="fpCity">Visakhapatnam (Vizag)</span>
                <span className="fpPrice">Starting from $120</span>
                <div className="fpRating">
                    <button>9.1</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img src="https://images.unsplash.com/photo-1605346576608-92f1346b67d6?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdGVsJTIwcm9vbXN8ZW58MHx8MHx8fDA%3D" alt="" className="fpImg"/>
                <span className="fpName">Hotel Holiday In</span>
                <span className="fpCity">Vijayawada</span>
                <span className="fpPrice">Starting from $110</span>
                <div className="fpRating">
                    <button>8.0</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img src="https://media.istockphoto.com/id/185113199/photo/shangri-la-hotel-room-in-new-delhi.webp?b=1&s=170667a&w=0&k=20&c=muK8fGhr13LKO6Fjcy9BmFIhoRNuZqfEUIhCe6ahREM=" alt="" className="fpImg"/>
                <span className="fpName">Aparthotel Stare Miasto</span>
                <span className="fpCity">Hyderabad</span>
                <span className="fpPrice">Starting from $130</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img src="https://media.istockphoto.com/id/168704591/photo/luxurious-two-bed-hotel-room-with-hardwood-floors.webp?b=1&s=170667a&w=0&k=20&c=TttpiOQDv6ItKr7LINaU8mKGbpv0fxTd2lh7S-23E_A=" alt="" className="fpImg"/>
                <span className="fpName">Hotel Vivantha</span>
                <span className="fpCity">Jubli Hills</span>
                <span className="fpPrice">Starting from $150</span>
                <div className="fpRating">
                    <button>9.2</button>
                    <span>Excellent</span>
                </div>
            </div>

        </div>
    )
}