import { HomeGuestLoveList } from '../../data'
import { useFetch } from '../../hooks/useFetch';
import { Loading } from '../Loading';
import './index.css'

export const HomeGuestLove = () => {
    const { data, loading, error } = useFetch("https://hotelbooking-q4vk.onrender.com/api/hotels?featured=true&limit=5");
    //console.log(data)
    return(
        <div className = "home-guest">
            {
                loading ? (<Loading/>) : (
                    <>
                        <div className = "home-guest-container">
                            {
                                HomeGuestLoveList && data.map((each, i) => (
                                    <div className = "home-guest-card" key={i}>
                                        <img src = {HomeGuestLoveList[i].img} alt ="img"/>
                                        <div className = "home-guest-desc">
                                            <h4>{each.name}</h4>
                                            <span>{each.city}, {each.address}</span>
                                            <span>{each.title}</span>
                                            <div>
                                                <button>{HomeGuestLoveList[i].rating}</button>
                                                
                                                <span>{each.type} type</span>
                                            </div>
                                            <span>Cheapest Price: {each.cheapestPrice}</span>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </>
                )
            }
        </div>
    )
}