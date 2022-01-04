import React from 'react';
import './Contact.css';
import bg from '../../../src/images/contact-bg.png'

const Contact = () => {
    const appointmentBg = {
        backgroundImage: `url(${bg})`,
        backgroundColor: 'rgba(63, 65, 93, 0.5 )',
        backgroundBlendMode: 'darken, luminosity',
        marginTop: '170px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    };
    return (
        < div style={appointmentBg} className='contact' >
            <h2 style={{ textAlign: 'center', color: 'white', padding: '50px 0px 100px 0px' }}>
                CONTACT ME</h2>
            <div className='row m-auto contact-both'>
                <div className=' contact-form'>
                    <input type="text" placeholder='Full name' />
                    <input type="email" placeholder='Email' />
                    <textarea placeholder="Message..."></textarea>
                    <button className='submit'><i class="far fa-paper-plane"></i> Send </button>
                </div>


                <div className=' contact-social' >
                    <div style={{ display: 'flex' }}>
                        <i class="fas fa-phone-alt"></i>
                        <p style={{ fontSize: '22px ', color: 'white' }}>+8801770557900</p>
                    </div>
                    <div style={{ display: 'flex', marginTop: '30px' }}>
                        <i class="fas fa-envelope"></i>
                        <p style={{ fontSize: '22px ', color: 'white' }}>amirulhosain77@gmail.com</p>
                    </div>
                    <div style={{ display: 'flex', marginTop: '30px' }}>
                        <i class="fab fa-facebook-f"></i>
                        <a target='_blank' style={{ fontSize: '22px', color: 'white' }} href="https://www.facebook.com/Amirul77.Hosain">Amirul Hosain</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;