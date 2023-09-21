import './App.css';
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Lights from './pages/Lights';
import Light from './pages/Light';

function App() {
  return (
    <div className='w-full h-screen bg-[#040D12]'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lights" element={<Lights />} />
          <Route path="/light" element={<Light />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
