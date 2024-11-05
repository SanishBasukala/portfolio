import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MoreProjects from './pages/MoreProjects/MoreProjects';
import NavbarV2 from './components/navbarV2/NavbarV2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <NavbarV2/>
  <Routes>
    <Route path='' element={<App/>}></Route>
    <Route path='/MoreProjects' element={<MoreProjects />}></Route>
  </Routes>
  </BrowserRouter>
);
