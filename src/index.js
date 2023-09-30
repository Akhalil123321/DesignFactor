import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './Components/NavBar/NavBar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import App from './Components/App/App';
import MainEn from './routes/MainEn';
import MainAr from './routes/MainAr';
import Appliances from './routes/Categories/Appliances/Appliances';
import Ceramics from './routes/Categories/Ceramics/Ceramics'
import Curtains from './routes/Categories/Curtains/Curtains'
import Doors from './routes/Categories/Doors/Doors'
import Fitout from './routes/Categories/Fitout/Fitout'
import Furniture from './routes/Categories/Furniture/Furniture'
import Gym from './routes/Categories/Gym/Gym'
import Marble from './routes/Categories/Marble/Marble'
import Sanitary from './routes/Categories/Sanitary/Sanitary'
import Sockets from './routes/Categories/Sockets/Sockets'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="Main-en" element={<MainEn/>} />
        <Route path="Main-ar" element={<MainAr/>} />
        <Route path="ceramics" element={<Ceramics/>} />
        <Route path="Appliances" element={<Appliances/>} />
        <Route path="Curtains" element={<Curtains/>} />
        <Route path="Doors" element={<Doors/>} />
        <Route path="Fitout" element={<Fitout/>} />
        <Route path="Furniture" element={<Furniture/>} />
        <Route path="Gym" element={<Gym/>} />
        <Route path="Marble" element={<Marble/>} />
        <Route path="Sanitary" element={<Sanitary/>} />
        <Route path="Sockets" element={<Sockets/>} />
      </Routes>
  </BrowserRouter>
);
