import React,{useState} from "react"
import "./header.css";
import {LocalHotel,Flight,DirectionsCar,Hotel,Wc,LocalTaxi,CalendarMonth} from "@mui/icons-material";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from "date-fns";
import { useNavigate } from "react-router-dom";


export default function Header({type}){
    const [destination,setDestiantion]=useState("")
    const [openDate,setOpenDate]=useState(false);
    const [date,setDate]=useState([{
        startDate:new Date(),
        endDate:new Date(),
        key:'selection'
    }]);
    const [openOptions,setOpenOptions]=useState(false);
    const [options,setOptions]=useState({
        adult:1,
        children:0,
        room:1
    })
    const navigate= useNavigate();
    const handleOption=(name,operation)=>{
        setOptions(prev=>{
            return{
                ...prev,[name]:operation==="i"?options[name]+1:options[name]-1,
            }
        })
    }
    const handleSearch=()=>{
        navigate("/hotels",{state:{destination,date,options}})
    }
    return (
        <div className="header">
            <div className={type==="list"?"headerContainer listMode":"headerContainer"}>
                <div  className="headerList">
                    <div className="headerListItem active">
                        <LocalHotel/>
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem">
                        <Flight/>
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem">
                        <DirectionsCar/>
                        <span>Car rentals</span>
                    </div>
                    <div className="headerListItem">
                        <Hotel/>
                        <span>Attractions</span>
                    </div>
                    <div className="headerListItem">
                        <LocalTaxi/>
                        <span>Airport taxis</span>
                    </div>
                </div>
                {type!=="list" && <>
                <h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
                <p className="headerDesc">Get rewarded for your travels - unlock instant savings of 10% or make with a free booking account. </p>
                <button className="headerBtn">Sign in / Register</button>
                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <LocalHotel className="headerIcon"/>
                        <input type="text" placeholder="Where are you going?" className="headerSearchInput" onChange={(e)=>setDestiantion(e.target.value)}/>
                    </div>
                    <div className="headerSearchItem">
                        <CalendarMonth className="headerIcon"/>
                        <span className="headerSearchText" onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate,"MM/dd/yy")} to ${format(date[0].endDate,"MM/dd/yy")} `}</span>

                        {openDate && <DateRange editableDateInputs={true}
                        onChange={item=>setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date} className="date" 
                        minDate={new Date()}/>}
                    </div>
                    <div className="headerSearchItem">
                        <Wc className="headerIcon"/>
                        <span className="headerSearchText" onClick={()=>setOpenOptions(!openOptions)}>{`${options.adult} adult. ${options.children} children. ${options.room} room`}</span>

                        {openOptions && 
                        <div className="options">
                            <div className="optionItems">
                                <span className="optionText">Adult</span>
                                <div className="optionCounter">
                                    <button className="optionCounterButton" onClick={()=>handleOption("adult","i")}>+</button>
                                    <span className="optionCounterNumber">{options.adult}</span>
                                    <button disabled={options.adult<=1} className="optionCounterButton" onClick={()=>handleOption("adult","d")}>-</button>
                                </div>
                            </div>
                            <div className="optionItems">
                                <span className="optionText">Children</span>
                                <div className="optionCounter">
                                    <button className="optionCounterButton" onClick={()=>handleOption("children","i")}>+</button>
                                    <span className="optionCounterNumber">{options.children}</span>
                                    <button disabled={options.children<=0} className="optionCounterButton" onClick={()=>handleOption("children","d")}>-</button>
                                </div>
                            </div>
                            <div className="optionItems">
                                <span className="optionText">Room</span>
                                <div className="optionCounter">
                                    <button className="optionCounterButton" onClick={()=>handleOption("room","i")}>+</button>
                                    <span className="optionCounterNumber">{options.room}</span>
                                    <button disabled={options.room<=1} className="optionCounterButton" onClick={()=>handleOption("room","d")}>-</button>
                                </div>
                            </div>
                        </div>}
                    </div>
                    <div className="headerSearchItem">
                        <button className="headerBtn" onClick={handleSearch}>Search</button>
                    </div>
                </div></>}
            </div>
        </div>
    )
}