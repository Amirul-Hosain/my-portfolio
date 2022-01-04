import React from 'react';
import './About.css'
import image from '../../../src/images/portfolio-image-removebg.png'


const About = () => {
    return (
        <div className='about-me'>

            <div className='row m-auto about-container'>
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100"><path fill="#ffff" fill-opacity="1" d="M0,32L1440,192L1440,0L0,0Z"></path></svg> */}

                <div className='col-lg-6 col-md-6 col-12 left-img'>
                    <img src={image} alt="" />
                </div>

                <div className='about-detail  col-lg-6 col-md-6 col-12'>
                    <p><span>I am <span style={{ color: '#0d6efd', fontSize: '23px', fontWeight: '700' }}>Amirul Hosain</span></span> a front-end web developer but know some of the back-end and has done some projects with Node.js. I love coding and enjoy it. I can't pass a day without coding. I have completed a development course from Programming Hero. I always like to learn something new, which is definitely on my own. If I get any error, I don't lose the set but I google it.</p>


                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100"><path fill="#ffff" fill-opacity="1" d="M0,32L1440,192L1440,320L0,320Z"></path></svg>
            </div>
        </div>
    );
};

export default About;