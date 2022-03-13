import React from 'react';
import Header from '../components/common/header'
import {
    Routes,
    Route,
  } from "react-router-dom";
import AppHome from './home';
import AppAbout from './about';
import AppContact from './contact';
import FooterComponent from '../components/common/footer';
import AppServices from './services';
const Main = ()=>{
    return(
        <div>
            <Header/>
                <Routes>
                    <Route path="/home" element={<AppHome />} />
                    <Route path="/about" element={<AppAbout />} />
                    <Route path="/contact" element={<AppContact />} />
                    <Route path="/services" element={<AppServices />} />
                </Routes>
            <FooterComponent/>
        </div>
    )
}

export default Main