import { useState } from 'react';
import './index.css'
import {format} from 'date-fns'
import { FaBed } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";
import {DateRange} from 'react-date-range'
import { FaPerson } from "react-icons/fa6";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css";
import {useNavigate} from 'react-router-dom'
import { Header } from '../Header';
import { hotelLocations } from '../../data';
import { IoLocation } from 'react-icons/io5';

export const HeaderSearch = () => {
    const [openDate, setOpenDate] = useState(false)
    const [locations, setlocations] = useState([])
    const navigate = useNavigate()
    const [openOptions, setOpenOptions] = useState(false)
    const [destination, setDestination] = useState('')
    const [isSearchActive, setIsSearchActive] = useState(false) 
    const [options, setOptions] = useState({
        adult : 1, 
        children : 0,
        room : 1,
    })
    const [dates, setDates] = useState([
        {
            startDate : new Date(),
            endDate : new Date(),
            key : "selection"
        }
    ])

    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev, [name] : operation === "i" ? options[name] + 1 : options[name] -1,
            }
        })
    }

    const onSearchDestination = (e) => {
        e.preventDefault()
        setIsSearchActive(true)
        setDestination(e.target.value)
        const filteredHotels = hotelLocations.filter(each => each.toLowerCase().includes(e.target.value.toLowerCase()))
        setlocations(filteredHotels)
    }

    const onlocationClick = (each) => {
        setDestination(each)
        setIsSearchActive(false)

    }

    const handleSearch = () => {
        navigate('/hotels', {state : {destination, dates, options}})
    }

    return(
        <div className='header-and-search' onClick={() => setIsSearchActive(false)}>
            <Header/>
            <div className='header-search'>
                <div className='header-desc'>
                    <h2>Find Your Next Stay</h2>
                    <p>Search low prices on hotels, homes and much more...</p>
                    <button onClick={() => navigate("/login")}>Signin/Register</button>
                </div>
                <div className = "header-search-container">
                    <div className = "header-search-item">
                        <FaBed/>
                        <input type = "search" placeholder = "Enter the Destination" value={destination} onChange={onSearchDestination} />
                        {isSearchActive && <ul className='locations-search-container'>
                            {
                                locations.map(each => (
                                    <div className='locations-search' onClick={() => onlocationClick(each)}>
                                        <span><IoLocation/></span>
                                        <span>{each}</span>
                                    </div>
                                ))
                            }
                        </ul>}
                    </div>
                    <div className = "header-search-item">
                        <CiCalendarDate/>
                        <span onClick={() => setOpenDate(!openDate)}>
                            {`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(dates[0].endDate, 'MM/dd/yyyy')}`}
                        </span>
                        {
                            openDate && (
                                <DateRange
                                    editableDateInputs = {true}
                                    onChange={(item) => setDates([item.selection])}
                                    moveRangeOnFirstSelection = {false}
                                    ranges={dates}
                                    minDate={new Date()}
                                    className='date'
                                />
                            )
                        }
                    </div>
                    <div className = "header-search-item">
                        <FaPerson/>
                        <span onClick={() => setOpenOptions(!openOptions)}>
                            {`${options.adult} adult . ${options.children} children . ${options.room} room`}
                        </span>
                        {
                            openOptions && (
                                <div className='options'>
                                    <div className='option-item'>
                                        <span>Adult</span>
                                        <div className='option-counter'>
                                            <button disabled = {options.adult <= 1} onClick={() => handleOption("adult", "d")}>-</button>
                                            <span>{options.adult}</span>
                                            <button onClick={() => handleOption("adult", "i")} >+</button>
                                        </div>
                                    </div>
                                    <div className='option-item'>
                                        <span>Children</span>
                                        <div className='option-counter'>
                                            <button disabled = {options.children <= 0} onClick={() => handleOption("children", "d")}>-</button>
                                            <span>{options.children}</span>
                                            <button onClick={() => handleOption("children", "i")} >+</button>
                                        </div>
                                    </div>
                                    <div className='option-item'>
                                        <span>Room</span>
                                        <div className='option-counter'>
                                            <button disabled = {options.room <= 1} onClick={() => handleOption("room", "d")}>-</button>
                                            <span>{options.room}</span>
                                            <button onClick={() => handleOption("room", "i")} >+</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div className='handle-search-item'>
                        <button className='header-search-button' onClick={handleSearch}>Search</button>
                    </div>
                </div>  
            </div>
        </div>
    )
}