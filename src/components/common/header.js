import React from 'react';
import { Menu } from 'antd';
import logo from '../../assets/images/logo.png'
const Appheader = () => {
    return (
        <div className='container-fluid'>
        <div className='header'>
        <div className="logo" >
        <img src={logo} alt='LOGO' className='imageLogo'/>
        </div>
            <Menu mode="horizontal" defaultSelectedKeys={['home']}>
                <Menu.Item key="home">Home</Menu.Item>
                <Menu.Item key="about">About</Menu.Item>
                <Menu.Item key="features">Features</Menu.Item>
                <Menu.Item key="howItWorks">How It Works</Menu.Item>
                <Menu.Item key="faq">FAQ</Menu.Item>
                <Menu.Item key="pricing">Pricing</Menu.Item>
                <Menu.Item key="contact">Contact</Menu.Item>
            </Menu>
        </div>
        </div>
    );
};

export default Appheader;