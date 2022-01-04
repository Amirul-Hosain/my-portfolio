import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import logo from '../../../src/images/A-logo.png'


const Navigation = () => {
    const [navigation, setNavigation] = useState(false);

    const handleBackground = () => {
        if (window.scrollY >= 80) {
            setNavigation(true);
        } else {
            setNavigation(false)
        }
    }
    window.addEventListener('scroll', handleBackground);


    const activeStyle = {
        borderBottom: '2px solid #0d6efd',
        color: '#0d6efd',
    }
    return (
        <div>
            <nav class={navigation ? ' nav-container  navbar navbar-light navbar-expand-lg fixed-top navbar-light'
                :
                ' nav-container2  navbar navbar-expand-lg fixed-top  navbar-light'} >
                <div class="container-fluid container">
                    <div className='header-image'>
                        <img width='60' src={logo} alt="" />
                    </div>
                    <button class="navbar-toggler bg-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarSupportedContent">
                        <div style={{ marginLeft: '25%' }}>
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li>
                                    <NavLink style={{ color: 'orange' }} activeStyle={activeStyle} className='nav-link' to='/home'>HOME</NavLink>
                                </li>
                                <li>
                                    <a style={{ color: 'orange' }} target="_blank" activeStyle={activeStyle} className='nav-link' href="https://drive.google.com/file/d/1iYwAjiSwmeRll65FClWUpvUSLASlSaIm/view?usp=sharing">RESUME</a> </li>
                                <li>
                                    <NavLink style={{ color: 'orange' }} activeStyle={activeStyle} className='nav-link' to='/portfolio'>PORTFOLIOS</NavLink>
                                </li>
                                <li>
                                    <NavLink style={{ color: 'orange' }} activeStyle={activeStyle} className='nav-link' to='/about'>ABOUT</NavLink>
                                </li>
                                <li>
                                    <NavLink style={{ color: 'orange' }} activeStyle={activeStyle} className='nav-link' to='/contact'>CONTACT</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;