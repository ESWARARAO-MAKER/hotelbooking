import './index.css'
import { TrendingCitiesData } from '../../data'

export const TrendingCities = () => {
    return(
        <div className = "trending-cities">
            <div className = "trending-cities-container">
                {
                    TrendingCitiesData.map(each => (
                        <div className = "trending-city">
                            <img src = {each.img} alt = "img" />
                            <p>{each.place}</p> 
                        </div>
                    ))
                }
            </div>
        </div>
    )
}