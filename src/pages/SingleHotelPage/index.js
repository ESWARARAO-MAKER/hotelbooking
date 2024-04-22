import { Header } from '../../components/Header'
//import {useLocation} from 'react-router-dom'
import './index.css'
import { useState } from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { CiParking1 } from "react-icons/ci";
import Footer from '../../components/Footer';
import { Email } from '../../components/Email';
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { hotelImagesList } from '../../data';


export const SingleHotelPage = () => {
    // const location = useLocation()
    // const [hotelData, setHotelData] = useState(location.state.each)
    const [carouselImg, setCarouselImg] = useState(0)

    const onLeftArrow = () => {
        if (carouselImg === hotelImagesList.length -1){
            setCarouselImg(0)
        }
        else{
            setCarouselImg(carouselImg + 1)
        }
    }

    const onRightArrow = () => {
        if (carouselImg === 0){
            setCarouselImg(hotelImagesList.length - 1)
        }
        else{
            setCarouselImg(carouselImg - 1)
        }
    }
    
    return(
        <div className='single-hotel-page'>
            <Header/>
            <div className='single-hotel-container'>
                <div className='single-hotel-desc'>
                    <div className='single-desc'>
                        <h1>Hotel Taj</h1>
                        <small><IoLocationSharp/> Ameerpet, Hyderabad</small>
                        <span>Book a stay over $200 at this property and get a free airport taxi</span>
                    </div>
                    <div className='best'>
                        <h1>Best Hotel in the city</h1>
                        <p>Hotel Description</p>
                    </div>
                    <div className='carosel'>
                        <FaAngleLeft className='arrow' onClick={onLeftArrow} />
                        <img src={hotelImagesList[carouselImg].img} alt='img'/>
                        <FaAngleRight className='arrow' onClick={onRightArrow}/>
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