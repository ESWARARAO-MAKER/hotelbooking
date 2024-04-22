import { Header } from '../../components/Header'
//import {useLocation} from 'react-router-dom'
import './index.css'
import { useState } from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { CiParking1 } from "react-icons/ci";
import Footer from '../../components/Footer';
import { Email } from '../../components/Email';

export const SingleHotelPage = () => {
    // const location = useLocation()
    // const [hotelData, setHotelData] = useState(location.state.each)
    
    return(
        <div className='single-hotel-page'>
            <Header/>
            <div className='single-hotel-container'>
                <div className='single-hotel'>
                    <div className='single-hotel-desc'>
                        <h1>Hotel Taj</h1>
                        <small><IoLocationSharp/> Ameerpet, Hyderabad</small>
                        <span>Book a stay over $200 at this property and get a free airport taxi</span>
                        <div className='best'>
                            <h1>Best Hotel in the city</h1>
                            <small>Hotel Description</small>
                        </div>
                        <div className='carosel'>
                            <img src='https://cf.bstatic.com/xdata/images/hotel/max1024x768/533487379.jpg?k=48e58f84cf129585be9f315255209069e0ccd1b5f5e49667f80650eeec9e15e2&o=&hp=1' alt='img'/>
                        </div>
                    </div>
                </div>
                <div className='property-heighlight-container'>
                    <button>Reserve or Book Now!</button>
                    <div className='property-heighlight'>
                        <span className='prop'>Property highlights</span>
                        <span>Perfect for a 1-night stay!</span>
                        <span><IoLocationSharp/> Top location: Highly rated by recent guests (8.4)</span>
                        <span><CiParking1/> Free private parking available</span>
                        <button>Reserve</button>
                    </div>
                </div>
            </div>
            <Email/>
            <Footer/>
        </div>
    )
}