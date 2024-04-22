import { BrowseByPropertyType } from '../../data'
import './index.css'

export const BrowseByPT = () => {
    return(
        <div className = "bpt">
            <div className = "bpt-container">
                {
                    BrowseByPropertyType.map(each => (
                        <div className = "property-container">
                            <img src = {each.img} alt = {each.type}/>
                            <p>{each.type}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}