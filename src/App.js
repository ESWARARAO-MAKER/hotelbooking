import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Lists from "./pages/lists/Lists";
import Hotel from "./pages/hotel/Hotel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<Lists/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
