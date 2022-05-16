import React from 'react';
import {Button} from 'antd'
import { Link } from 'react-router-dom';
import './footer.css';
import logo from '../../../assets/images/logo.png';
const FooterComponent = () => {

    return (
        <div className='footer-container'>
            <div className='footer-links'>
                 <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                         <img src={logo} className="logo"/>
                     </div>
                     <div className='footer-link-items'>
                         <h2>Useful Links</h2>
                         <Link to="/">Home</Link>
                         <Link to="/about">About Us</Link>
                         <Link to="/services">Services</Link>
                         <Link to="/contact">Contact Us</Link>
                     </div>
                     <div className='footer-link-items'>
                         <h2>Social Media</h2>
                         <Link to="#">Facebook</Link>
                         <Link to="#">Instagram</Link>
                         <Link to="#">Twitter</Link>
                         <Link to="#">LinkedIn</Link>
                     </div>
                     <div className='footer-link-items'>
                         <h2>Contact Office</h2>
                         <span> <i className="fa-solid fa-house"></i>Sinamangal, Kathmandu</span>
                         <span> <i className="fa-solid fa-phone"></i>9860452256</span>
                     </div>
                 </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to="/" className='social-logo'>
                            The BizNest Consultancy
                        </Link>
                    </div>
                    <small className='website-rights'>TBC &copy; 2022</small>
                    <div className='social-icons'>
                        <Link className='social-icon-link facebook'
                        to="/"
                        target="_blank"
                        aria-label='Facebook'
                        >
                            <i className='fab fa-facebook-f'></i>
                        </Link>
                        <Link className='social-icon-link instagram'
                        to="/"
                        target="_blank"
                        aria-label='Instagram'
                        >
                            <i className='fab fa-instagram'></i>
                        </Link>
                        <Link className='social-icon-link twitter'
                        to="/"
                        target="_blank"
                        aria-label='Twitter'
                        >
                            <i className='fab fa-twitter'></i>
                        </Link>
                        <Link className='social-icon-link linkedin'
                        to="/"
                        target="_blank"
                        aria-label='LinkedIn'
                        >
                            <i className='fab fa-linkedin'></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FooterComponent;