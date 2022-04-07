import React, { useState } from 'react';
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
import OutSourcingOfBookkeeping from '../components/services/OutsourcingOfBookkeeping';
import AuditAndAssurance from './../components/services/AuditAndAssurance';
import RegistrationServices from './../components/services/RegistrationServices';
import ManagementAccounting from './../components/services/ManagementAccounting';
import CorporatePolicyDevelopment from './../components/services/CorporatePolicyDevelopment';
import FixedAssetManagement from './../components/services/FixedAssetManagement';
import BusinessConsulting from './../components/services/BusinessConsulting';
import Others from './../components/services/Others';
import Taxation from './../components/services/Taxation';

const Main = ()=>{
    return(
        <div>
                <Header/>
                <Routes>
                    <Route path="/home" element={<AppHome />} />
                    <Route path="/about" element={<AppAbout />} />
                    <Route path="/contact" element={<AppContact />} />
                    <Route path="/services" element={<AppServices />} />
                    <Route path="/services/taxation" element={<Taxation/>}/>
                    <Route path="/services/audit_and_assurance" element={<AuditAndAssurance/>}/>
                    <Route path="/services/registration" element={<RegistrationServices/>}/>
                    <Route path="/services/management_accounting" element={<ManagementAccounting/>}/>
                    <Route path="/services/corporate_policy_development" element={<CorporatePolicyDevelopment/>}/>
                    <Route path="/services/fixed_asset_management" element={<FixedAssetManagement/>}/>
                    <Route path="/services/business_consulting" element={<BusinessConsulting/>}/>
                    <Route path="/services/others" element={<Others/>}/>
                    <Route path="/services/outsourcing_of_bookkeeping" element={<OutSourcingOfBookkeeping/>}/>
                </Routes>
            <FooterComponent/>
        </div>
    )
}

export default Main