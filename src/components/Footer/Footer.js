import React from 'react';
import './Footer.css';
import logo from '../../../src/images/A-logo.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className=' container footer-container'>
                <div className='row m-auto footer-detail'>
                    <div className="footer-logo  col-lg-4 col-sm-6 col-12">
                        <img width='60' height='60' src={logo} alt="" />
                        <p><span>I am <span style={{ color: '#0d6efd', fontSize: '23px', fontWeight: '700' }}>Amirul Hosain</span></span> a front-end web developer but know some of the back-end and has done some projects with Node.js. I love coding and enjoy it. I can't pass a day without coding. I have completed a development course from Programming Hero. I always like to learn something new, which is definitely on my own. If I get any error, I don't lose the set but I google it.</p>
                    </div>

                    <div className="footer-contact  col-lg-4 col-sm-6 col-12">
                        <h2 style={{ borderBottom: '1px solid gray', width: '130px' }}>Contact</h2>
                        <p><i class="fas fa-map-marker-alt"></i> Rajbari shadar, Rajbari,  Bangladesh</p>
                        <p><i class="fas fa-phone"></i> Phone: 0123456789</p>
                        <p><i style={{ color: 'white', marginLeft: '-14px', marginRight: '-7px' }} class="fas fa-envelope"></i> amirulhosain77@gmail.com</p>
                    </div>


                    <div className="footer-social  col-lg-4 col-sm-6 col-12">
                        <h2 style={{ borderBottom: '1px solid gray', width: '150px', paddingBottom: '10px' }}>Flow Me</h2>
                        <a href="/"><i class="fab fa-facebook-square social-icon"></i></a>
                        <a href="/"><i class="fab fa-twitter-square  social-icon"></i></a>
                        <a href="/"><i class="fab fa-instagram-square social-icon"></i></a>
                        <a href="/"><i class="fab fa-linkedin social-icon"></i></a>
                    </div>
                </div>
            </div>

            <hr style={{ color: 'white', width: '85%', margin: 'auto' }} />

            {/* copy right */}
            <p className='copy-right'><i class="far fa-copyright"></i> Copyright | All Right Reserved | Designed and Developed by Dev Amirul</p>
        </div>
    );
};

export default Footer;