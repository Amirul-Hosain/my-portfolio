import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import TypeWriterEffect from 'react-typewriter-effect';
import developer from '../../../src/images/user-lap.png'

const Header = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    });
    return (
        <div className=' home-component'>
            <div className="row container  m-auto mt-4">
                <div className="col-lg-7 col-md-12 col-sm-12 home-control">
                    <div data-aos="fade-down-right">

                        <div className='home-detail'>
                            <h2 style={{ color: 'white' }}>Hi, I am <br /> <span className='name'>Amirul Hosain</span></h2>
                            <p style={{ display: 'flex' }}>
                                <span style={{ color: 'white', fontSize: '30px', marginTop: '-5px' }}>a</span>
                                <span style={{ marginLeft: '15px' }}>
                                    <TypeWriterEffect
                                        textStyle={{
                                            fontFamily: 'Red Hat Display',
                                            color: '#0d6efd',
                                            fontWeight: 500,
                                            fontSize: '30px',
                                        }}
                                        startDelay={1000}
                                        cursorColor="#3F3D56"

                                        multiText={[
                                            'Front-End Developer',
                                            'MERN Stack Developer',
                                            'React.js Developer'
                                        ]}
                                        multiTextDelay={2000}
                                        typeSpeed={70}
                                    />
                                </span>
                            </p>
                        </div>
                        <div className='social-icon'>
                            <a target="_blank" href="https://www.facebook.com/Amirul77.Hosain"><i class="fab fa-facebook social-icon"></i></a>
                            <a target="_blank" href="https://github.com/Amirul-Hosain"><i class="fab fa-github  social-icon"></i></a>
                            <a target="_blank" href="https://www.linkedin.com/in/amirul-hosain/"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>


                {/* right site image */}
                <div className='col-lg-5 col-md-12 col-sm-12 '>
                    <img width='300px' height='370' src={developer} alt="" />
                </div>
            </div>

            <div className='resume-button'>
                <button><a target='_blank' href="https://drive.google.com/file/d/1FTiRwomJj8h-Zy26-xOAxEFL-4wZOL8t/view?usp=sharing">VIEW RESUME </a></button>
            </div>
        </div>
    );
};

export default Header;