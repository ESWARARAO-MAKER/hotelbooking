import { useState } from 'react'
import { Header } from '../../components/Header'
import {format}from 'date-fns'
import './index.css'
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css";
import { DateRange } from 'react-date-range'
import {useLocation} from 'react-router-dom'
import {Oval} from 'react-loader-spinner'
import { listOfHotels } from '../../data'
import { AiTwotoneLike } from "react-icons/ai";
import { useNavigate } from 'react-router-dom'
import { IoLocationOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { IoPerson } from "react-icons/io5";


export const HotelsListPage = () => {
    const location = useLocation()
    const [isLoading, setIsLoading] = useState(false)
    const [destination, setDestination] = useState(location.state.destination)
    const [openDate, setOpenDate] = useState(false)
    const [dates, setDates] = useState(location.state.dates);
    const [options, setOptions] = useState(location.state.options)
    const [min, setMin] = useState(undefined)
    const [max, setMax] = useState(undefined)
    const navigate = useNavigate()
    const [openOptions, setOpenOptions] = useState(false)

    const handleClick = () => {
        
    }

    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev, [name] : operation === "i" ? options[name] + 1 : options[name] -1,
            }
        })
    }

    const onShowHotel = (each, id) => {
        navigate(`/hotel/${id}`, {state : {each,}})
    }

    const renderLoadingView = () => (
        <div className='loading'>
            <Oval
                visible={true}
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="oval-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    )
    
    const renderHotelsListView = () => (
        <div className='list-of-hotels'>
            {
                listOfHotels.map((each, id) => (
                    <div className='hotel-con'>
                        <img src={each.img} alt='img'/>
                        <div>
                            <div className='hotel-desc'>
                                <span className='hotel-name'>{each.name}</span>
                                <span className='like'><AiTwotoneLike/></span>
                                <span>{each.place}</span>
                                <span className='desc'>{each.desc}</span>
                            </div>
                            <div className='hotel-desc hotel-review-rating'>
                                <div className='rev'>
                                    <span className='type'>{each.type}</span>
                                    <span>{each.reviews}reviews</span>
                                    <button>{each.rating}</button>
                                </div>
                                <button onClick={ () => onShowHotel(each, id)}>See Availability</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )

    return(
        <div className = "hotels-list-page">
            <Header/>
            <div className='hotels-and-search-container'>
                {/* <div className='hotels-search-container'>
                    <h3>Search</h3>
                    <div className='hotel-destination-date-container'>
                        <div className='hotels-destination'>
                            <span>Destination</span>
                            <input type = "text" placeholder={destination} />
                        </div>
                        <div className='hotels-destination'>
                            <span>Checkin Date</span>
                            <span className='hotels-date' onClick={() => setOpenDate(!openDate)}>{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
                            {
                                openDate && (
                                    <DateRange onChange={item => setDates([item.selection])}
                                    minDate={new Date()}
                                    ranges={dates}
                                    />
                                )
                            }
                        </div>
                    </div>
                    <div className='hotels-search-options'>
                        <span>Options</span>
                        <div className='ls-options'>
                            <div className='ls-option-item'>
                                <span>Min price <small>per night</small></span>
                            </div>
                            <input type='number' onChange={(e) => setMin(e.target.value)}/>
                        </div>
                        <div className='ls-options'>
                            <div className='ls-option-item'>
                                <span>Max price <small>per night</small></span>
                            </div>
                            <input type='number' onChange={(e) => setMax(e.target.value)}/>
                        </div>
                        <div className='ls-options'>
                            <div className='ls-option-item'>
                                <span>Adult</span>
                            </div>
                            <input type='number' min={1} placeholder={options.adult}/>
                        </div>
                        <div className='ls-options'>
                            <div className='ls-option-item'>
                                <span>Children</span>
                            </div>
                            <input type='number' min={0} placeholder={options.children}/>
                        </div>
                        <div className='ls-options'>
                            <div className='ls-option-item'>
                                <span>Room</span>
                            </div>
                            <input type='number' min={1} placeholder={options.room}/>
                        </div>
                    </div>
                    <div className='hotel-search-button'>
                        <button onClick={handleClick}>Search</button>
                    </div>
                </div> */}
                <div className='hotels-search-container'>
                    <div className='destination'>
                        <IoLocationOutline/>
                        <div className='destination-name'>
                            <small>Search Places, hotels and more...</small>
                            <span><b>{destination}</b></span>
                        </div>
                    </div>
                    <div className='destination'>
                        <CiCalendar/>
                        <div className='date-range'>
                            <small>Checkin Date</small>
                            <span className='hotels-date' onClick={() => setOpenDate(!openDate)}>{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
                            {
                                openDate && (
                                    <DateRange onChange={item => setDates([item.selection])}
                                    minDate={new Date()}
                                    ranges={dates}
                                    className='date-open'/>
                                )
                            }
                        </div>
                    </div>
                    <div className='destination options-con'>
                        <IoPerson/>
                        <div className='destination-name'>
                            <small>Travellers</small>
                            <span onClick={() => setOpenOptions(!openOptions)}>{options.adult} adults + {options.children} children with {options.room} room</span>
                        </div>
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
                </div>
                <div className='hotels-list-container'>
                    {isLoading ? renderLoadingView() : renderHotelsListView()}
                </div>
            </div>
        </div>
    )
}