import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import { HomePage } from './pages/HomePage';
import { HotelsListPage } from './pages/HotelsListPage';
import { SingleHotelPage } from './pages/SingleHotelPage';
import { LoginRegisterPage } from './pages/LoginRegisterPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/login' Component={LoginRegisterPage}/>
          <Route exact path = "/" Component = {HomePage}/>
          <Route exact path = '/hotels' Component={HotelsListPage}/>
          <Route exact path = "/hotel/:id" Component={SingleHotelPage}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
