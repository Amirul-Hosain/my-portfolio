import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Portfolios from '../Portfolios/Portfolios';
import Skills from '../Skills/Skills';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Header />
            <About />
            <Skills />
            <Portfolios />
            <Contact />
        </div>
    );
};

export default Home;