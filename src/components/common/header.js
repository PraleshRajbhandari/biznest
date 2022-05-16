import React, {useState} from 'react';
import { Menu} from 'antd';
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom';
import './navbar.css';


const Appheader = () => {
    const [click,setClick] = useState(false);
    const handleClick = ()=>{
        setClick(!click)
    }

    const closeMobileMenu =()=>setClick(false);

    const [current, setCurrent]= useState('home');
    // const handleClick = e=>{
    //     console.log(e)
    //     setCurrent(e.key);
    // }
    const servicesClick = (e)=>{
        console.log("Pralesh");
    }
    return (
        <div className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className='navbar-logo'>
                     <img src={logo} alt='LOGO' className='imageLogo'/>
                     <span className="companyHeader"> The BizNest Consultancy</span>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? "fa-duotone fa-x" : 'fa-solid fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active': 'nav-menu'}>
                    <li className='nav-item'>
                    <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                    </li>
                    <li className='nav-item'>
                    <Link to="/services" className='nav-links' onClick={closeMobileMenu} >
                        Services
                    </Link>
                    </li>
                    <li>
                    <Link to="/about" className='nav-links' onClick={closeMobileMenu}>
                        About Us
                    </Link>
                    </li>
                    <li>
                    <Link to="/contact" className='nav-links' onClick={closeMobileMenu}>
                        Contact
                    </Link>
                    </li>
                </ul> 
        </div>
        </div>
    );
};

export default Appheader;