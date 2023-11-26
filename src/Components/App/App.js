import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import './App.css'
import { FilesContextProvider } from '../../Context/FilesContext';
import { Route, Routes } from 'react-router-dom';
import SendInquiry from '../../Components/SendInquiry/SendInquiry';
import Main from '../../routes/Main';
import Appliances from '../../routes/Categories/Appliances/Appliances';
import Ceramics from '../../routes/Categories/Ceramics/Ceramics'
import Curtains from '../../routes/Categories/Curtains/Curtains'
import Doors from '../../routes/Categories/Doors/Doors'
import Fitout from '../../routes/Categories/Fitout/Fitout'
import Furniture from '../../routes/Categories/Furniture/Furniture'
import Gym from '../../routes/Categories/Gym/Gym'
import Marble from '../../routes/Categories/Marble/Marble'
import Sanitary from '../../routes/Categories/Sanitary/Sanitary'
import Lighting from '../../routes/Categories/Lighting/Lighting'
import Accessories from '../../routes/Categories/Accessories/Accessories';
import Maintenance from '../../routes/Categories/Maintenance/Maintenance';
import Project from '../../routes/Project'

function App() {
  return (
    <FilesContextProvider>
      <NavBar/>
      <SendInquiry/>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="Main" element={<Main/>} />
          <Route path="ceramics" element={<Ceramics/>} />
          <Route path="Appliances" element={<Appliances/>} />
          <Route path="Curtains" element={<Curtains/>} />
          <Route path="Doors" element={<Doors/>} />
          <Route path="Fitout" element={<Fitout/>} />
          <Route path="Furniture" element={<Furniture/>} />
          <Route path="Gym" element={<Gym/>} />
          <Route path="Marble" element={<Marble/>} />
          <Route path="Sanitary" element={<Sanitary/>} />
          <Route path="Lighting" element={<Lighting/>} />
          <Route path="Accessories" element={<Accessories/>} />
          <Route path="Maintenance" element={<Maintenance/>} />
          <Route path="Project" element={<Project/>} />
        </Routes>
  </FilesContextProvider>
  );
}

export default App;
