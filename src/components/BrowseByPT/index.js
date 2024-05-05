import { BrowseByPropertyType } from '../../data'
import { useFetch } from '../../hooks/useFetch';
import { Loading } from '../Loading'
import './index.css'

export const BrowseByPT = () => {
    const { data, loading, error } = useFetch(
        "https://hotelbooking-q4vk.onrender.com/api/hotels/countByType"
    );
    //console.log(data)
    return(
        <div className = "bpt">
            {
                loading ? (<Loading/>) : (
                    <>
                        <div className = "bpt-container">
                            {
                                data && BrowseByPropertyType.map((each, i) => (
                                    <div className = "property-container" key={i}>
                                        <img src = {each.img} alt = {each.type}/>
                                        <p>{data[i]?.type}</p>
                                        <span>{data[i]?.count} {data[i]?.type}</span>
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