import React, {useState} from 'react';
import { Menu } from 'antd';
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom';
const Appheader = () => {
    const [current, setCurrent]= useState('home');

    const handleClick = e=>{
        console.log(e)
        setCurrent(e.key);
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
                <Menu.Item key="services"><Link to="/services">Services</Link></Menu.Item>
                <Menu.Item key="contact"><Link to="/contact">Contact</Link></Menu.Item>
        
            </Menu>
        </div>
        </div>
    );
};

export default Appheader;