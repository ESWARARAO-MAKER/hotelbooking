import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Progress from "./components/workingInProgress/Progress"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/hotels" element={<List/>}/>
        <Route exact path="/hotels/:id" element={<Hotel/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path = "/register" element = {<Register />}/>
        <Route exact path = "/working" element = {<Progress />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;