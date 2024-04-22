import { BrowseByPT } from '../../components/BrowseByPT'
import { Email } from '../../components/Email'
import Footer from '../../components/Footer'
import { HeaderSearch } from '../../components/HeaderSearch'
import { HomeGuestLove } from '../../components/HomeGuestLove'
import { TrendingCities } from '../../components/TrendingCities'
import './index.css'

export const HomePage = () => {
    return(
        <div className='home-page'>
            <HeaderSearch/>
            <h2>Treding Places</h2>
            <TrendingCities/>
            <h2>Browse by property type</h2>
            <BrowseByPT/>
            <h2>Home Guest Love</h2>
            <HomeGuestLove/>
            <Email/>
            <Footer/>
        </div>
    )
}