import React, { useState } from "react";
import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import {LocationOn,ArrowBackIos,ArrowForwardIos,Cancel} from "@mui/icons-material";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";

export default function Hotel(){

    const [slideNumber,setSlideNumber]=useState(0);
    const [open,setOpen] = useState(false);

    const handleOpen = (i)=>{
        setSlideNumber(i);
        setOpen(true);
    }
    const handleMove = (direction)=>{
        let newSlideNumber;

        if (direction==="l"){
            newSlideNumber = slideNumber=== 0 ? 5 : slideNumber-1;
        }
        else{
            newSlideNumber= slideNumber===5 ? 0 : slideNumber+1;
        }
        setSlideNumber(newSlideNumber);
    }

    const photos = [
        {
            src:"https://media.istockphoto.com/id/934123520/photo/3d-rendering-modern-luxury-bedroom-suite-in-resort-with-bathroom.jpg?s=612x612&w=0&k=20&c=Es7IaaoVajNKqxU6estoa1TbxoSUy86MzGz48p78Oj0="
        },
        {
            src:"https://media.istockphoto.com/id/1050564510/photo/3d-rendering-beautiful-luxury-bedroom-suite-in-hotel-with-tv.jpg?s=612x612&w=0&k=20&c=ZYEso7dgPl889aYddhY2Fj3GOyuwqliHkbbT8pjl_iM="
        },
        {
            src:"https://media.istockphoto.com/photos/3d-rendering-modern-luxury-bedroom-suite-and-bathroom-picture-id928431714?k=20&m=928431714&s=612x612&w=0&h=JvgTVD-IHmiX5ZkKQOCj51z-JXhQdQ5MsuQci_aBMyI="
        },
        {
            src:"https://www.oppeinhome.com/upload/image/product/thumb/20211009/white-grey-beige-modern-hotel-wood-grain1.jpg"
        },
        {
            src:"https://5.imimg.com/data5/QF/AH/OR/SELLER-1961412/indore-hotel.jpg"
        },
        {
            src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDcUTwMZKG9Vp7TKKG51ZEBmvb3VGBGjTN52gpM2G63RW_Jun9r8HgtFeakE9ytd3ZYHI&usqp=CAU"
        },
        
    ]
    return (
        <div>
            <Navbar/>
            <Header type="list"/>
            <div className="hotelContainer">
                {open&&<div className="slidder">
                    <Cancel className="close" onClick={()=>setOpen(false)}/>
                    <ArrowBackIos className="arrow" onClick={()=>handleMove("l")} />
                    <div className="sliderWrapper">
                        <img src={photos[slideNumber].src} alt="" className="sliderImg"/>
                    </div>
                    <ArrowForwardIos className="arrow" onClick={()=>handleMove("r")}/>
                </div>}
                <div className="hotelWrapper">
                    <button className="bookNow">Reserve or Book Now!</button>
                    <h1 className="hotelTitle">Grand Hotel</h1>
                    <div className="hotelAddress">
                        <LocationOn/>
                        <span>SR Nagra, Hyderabad</span>
                    </div>
                    <span className="hotelDistance">Excellent location - 500m from center</span>
                    <span className="hotelPriceHighlight">Book a stay over $114 at this property and get a free airport taxi</span>
                    <div className="hotelImages">
                        {photos.map((photo,i)=>(
                            <div className="hotelImgWrapper">
                                <img onClick={()=>handleOpen(i)} src={photo.src} alt="" className="hotelImg"/>
                            </div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsTexts">
                            <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
                            <p className="hotelDesc">
                            Escape to relax on a captivating beachfront retreat at Ramada Resort by Wyndham Dar Es Salaam. 
                            With a gorgeous private beach, globally inspired restaurants, rooms with private balconies, and stylish event venues, 
                            our resort offers an ideal destination for business and leisure travelers visiting Tanzania.Find your perfect relaxation spot 
                            in our tastefully appointed rooms with breathtaking ocean views, plush king beds, private balconies, and a range of modern conveniences and comforts.
                            </p>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>Perfect for a 9-nights stay!</h1>
                            <span>Located in real heart of hyderabad, this property has an excellent location score of 9.8!</span>
                            <h2><bold>$945</bold>(9 nights)</h2>
                            <button>Reserve a Book Now!</button>
                        </div>
                    </div>
                </div>
                <MailList/>
                <Footer/>
            </div>
        </div>
    )
}