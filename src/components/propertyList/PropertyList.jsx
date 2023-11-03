import React from "react";
import "./propertyList.css"

export default function PropertyList(){
    return (
        <div className="pList">
            <div className="pListItem">
                <img src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tc3xlbnwwfHwwfHx8MA%3D%3D" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Apartments</h1>
                    <h2>13 Apartments</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWwlMjByb29tc3xlbnwwfHwwfHx8MA%3D%3D" alt="" className="pListImg"/>
                <div className="pListTitles">
                    <h1>Hotels</h1>
                    <h2>33 hotels</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://images.unsplash.com/photo-1621293954908-907159247fc8?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsJTIwcm9vbXN8ZW58MHx8MHx8fDA%3D" alt="" className="pListImg"/>
                <div className="pListTitles">
                    <h1>Cabins</h1>
                    <h2>23 Cabins</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://images.unsplash.com/photo-1595576508898-0ad5c879a061?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWwlMjByb29tc3xlbnwwfHwwfHx8MA%3D%3D" alt="" className="pListImg"/>
                <div className="pListTitles">
                    <h1>Villas</h1>
                    <h2>9 Villas</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://images.unsplash.com/photo-1602002418082-a4443e081dd1?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90ZWwlMjByb29tc3xlbnwwfHwwfHx8MA%3D%3D" alt="" className="pListImg"/>
                <div className="pListTitles">
                    <h1>Resorts</h1>
                    <h2>3 Resorts</h2>
                </div>
            </div>
            

        </div>
    )
}