import React, {useState} from 'react';
import { Menu} from 'antd';
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom';
const { SubMenu } = Menu;


const Appheader = () => {
    const [current, setCurrent]= useState('home');
    const handleClick = e=>{
        console.log(e)
        setCurrent(e.key);
    }
    const servicesClick = (e)=>{
        console.log("Pralesh");
    }
    return (
        <div className='container-fluid'>
        <div className='header'>
        <div className="logo" >
        <img src={logo} alt='LOGO' className='imageLogo'/>BizNest Consultancy
        </div>
            <Menu mode="horizontal" onClick={handleClick} selectedKeys={current}>
                <Menu.Item key="home"><Link to="/home">Home</Link></Menu.Item>
                <Menu.Item key="about"><Link to="/about">About</Link></Menu.Item>
                <SubMenu key="SubMenu" title="Services">
                        <Menu.Item key="services:1">
                            <Link to="/services/outsourcing_of_bookkeeping">
                                 Outsourcing of Bookkeeping & Financial Services
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="services:2">
                            <Link to="/services/taxation">
                                Taxation (Direct & Indirect)
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="services:3">
                            <Link to="/services/audit_and_assurance">
                                 Audit and Assurance Services
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="services:4">
                            <Link to="/services/registration">
                            Registration Services
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="services:5">
                            <Link to="/services/management_accounting">
                                Management Accounting
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="services:6">
                            <Link to="/services/corporate_policy_development">
                                Corporate Policy Development
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="services:7">
                            <Link to ="/services/fixed_asset_management">
                                Fixed Asset Management Services
                            </Link>
                       </Menu.Item>
                        <Menu.Item key="services:8">
                            <Link to="/services/business_consulting">
                             Business Consulting Services
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="services:9">
                            <Link to="/services/others">
                                Others
                            </Link>
                        </Menu.Item>
                        
                </SubMenu>
                <Menu.Item key="contact"><Link to="/contact">Contact</Link></Menu.Item>
        
            </Menu>
        </div>
        </div>
    );
};

export default Appheader;