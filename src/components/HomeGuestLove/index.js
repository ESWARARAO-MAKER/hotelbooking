import { HomeGuestLoveList } from '../../data'
import './index.css'

export const HomeGuestLove = () => {
    return(
        <div className = "home-guest">
            <div className = "home-guest-container">
                {
                    HomeGuestLoveList.map(each => (
                        <div className = "home-guest-card">
                            <img src = {each.img} alt ="img"/>
                            <div className = "home-guest-desc">
                                <p>{each.place}</p>
                                <div>
                                    <button>{each.rating}</button>
                                    <span>Superb</span>
                                    <span>{each.reviews} reviews</span>
                                </div>
                                <span>Price: {each.price}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}