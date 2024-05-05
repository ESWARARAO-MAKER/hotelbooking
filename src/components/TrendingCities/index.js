import './index.css'
import { TrendingCitiesData } from '../../data'
import { useFetch } from '../../hooks/useFetch';
import { Loading } from '../Loading';

export const TrendingCities = () => {
    const {data, loading, error} = useFetch(
        "https://hotelbooking-q4vk.onrender.com/api/hotels/countByCity?cities=Vijayawada,Hyderabad,vizag"
    );
    //console.log(data)
    return(
        <div className = "trending-cities">
            {loading ? <Loading/> : (
                <>
                    <div className = "trending-cities-container">
                        {
                            TrendingCitiesData.map((each,index) => (
                                <div className = "trending-city" key={index}>
                                    <img src = {each.img} alt = "img" />
                                    <p>{each.place}</p> 
                                    <span>count : {data[index] ? data[index] : 0}</span>
                                </div>
                            ))
                        }
                    </div>
                </>
            )}
        </div>
    )
}