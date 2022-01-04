import React, { useEffect } from 'react';
import './Portfolios.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";

import bikeHeader from '../../../src/images/bike/header.PNG';
import bikeProduct from '../../../src/images/bike/product.PNG';
import bikeReview from '../../../src/images/bike/review.PNG';

import mediHeader from '../../../src/images/medicine-store/medicine-store.PNG';
import mediAboute from '../../../src/images/medicine-store/about.PNG';
import mediService from '../../../src/images/medicine-store/service.PNG';

// happy journy
import journyHeader from '../../../src/images/happy-journy/header.PNG'
import journyServices from '../../../src/images/happy-journy/services.PNG'
import journyChose from '../../../src/images/happy-journy/chose-us.PNG'

// book archive
import bookFornt from '../../../src/images/Book-archive/front-page.PNG'
import iliad from '../../../src/images/Book-archive/iliad.PNG'
import responsive from '../../../src/images/Book-archive/responsive.PNG';

// bootstrap honda
import hondaHeader from '../../../src/images/header.PNG';
import faq from '../../../src/images/FAQ.PNG';
import team from '../../../src/images/team-member.PNG';

// Shopping cart
import shoppingFront from '../../../src/images/shopping-cart/front-page.PNG';
import cart from '../../../src/images/shopping-cart/cart.PNG';

const Portfolios = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    });
    return (
        <div className='portfolios-component'>
            <div style={{ width: '95%' }} className="row m-auto portfolio-container">
                <h2 style={{ textAlign: 'center', marginBottom: '80px' }}>PORTFOLIOS</h2>

                <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='single-portfolio col-lg-4 col-md-6 col-12'>
                    <div style={{ width: '100%' }} id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img height='220px' src={bikeHeader} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img height='220px' src={bikeProduct} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img height='220px' src={bikeReview} class="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>

                    <div className='title-feature'>
                        <h4>Bike Showroom Website</h4>
                        <ul className='features'>
                            <li><i class="fas fa-caret-right"></i>
                                This is MERN stack website
                            </li>
                            <li><i class="fas fa-caret-right"></i>
                                User can login and add buy product and they can delete their ordered product.
                            </li>
                            <li><i class="fas fa-caret-right"></i>
                                Separate Dashboard for user and admin
                            </li>
                            <li><i class="fas fa-caret-right"></i>
                                Admin can handle all product and they can add or remove a product. Admin can make another admin.
                            </li>
                        </ul>

                        {/* website link */}
                        <div className='website-link'>
                            <button>
                                <a target="_blank" href="https://super-bike-showroom.web.app/">
                                    Live Site
                                </a>
                            </button>
                            <button>
                                <a target="_blank" href="https://github.com/Amirul-Hosain/bike-showroom-client">
                                    Client Code
                                </a>
                            </button>
                            <button>
                                <a target="_blank" href="https://github.com/Amirul-Hosain/bike-showroom-server">
                                    Server Code
                                </a>
                            </button>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='single-portfolio col-lg-4 col-md-6 col-12'>
                    <div style={{ width: '100%' }} id="carouselExampleControls2" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img height='220px' src={mediHeader} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img height='220px' src={mediAboute} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img height='220px' src={mediService} class="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>

                    <div className='title-feature'>
                        <h4>Medicine Store Website</h4>
                        <ul className='features'>
                            <li><i class="fas fa-caret-right"></i>
                                Its main feature is firebase login and registration system.
                            </li>
                            <li><i class="fas fa-caret-right"></i>
                                Without login or registration user cannot order because add product route is private route.
                                when a user want to go private route their redirect to login page and after login their redirect product page.
                            </li>
                        </ul>

                        {/* website link */}
                        <div className='website-link'>
                            <button>
                                <a target="_blank" href="https://medicine-store-b2cbe.web.app/">
                                    Live Site
                                </a>
                            </button>
                            <button>
                                <a target="_blank" href="https://github.com/Amirul-Hosain/drug-pharmacy">
                                    Client Code
                                </a>
                            </button>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='single-portfolio col-lg-4 col-md-6 col-12'>
                    <div style={{ width: '100%' }} id="carouselExampleControls3" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img height='220px' src={journyHeader} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img height='220px' src={journyServices} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img height='220px' src={journyChose} class="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>

                    <div className='title-feature'>
                        <h4>Journy Related Website</h4>
                        <ul className='features'>
                            <li><i class="fas fa-caret-right"></i>
                                This is MERN stack website
                            </li>
                            {/* <li><i class="fas fa-caret-right"></i>
                                User can login and add buy product and they can delete their ordered product.
                            </li> */}
                            <li><i class="fas fa-caret-right"></i>
                                Here I use React.js for front-end development and back-end for nodeJS. Sign in or Registration method developed by firebase. Client site code host in firebase and server site code host in heroku.
                            </li>
                        </ul>

                        {/* website link */}
                        <div className='website-link'>
                            <button>
                                <a target="_blank" href="https://happy-journy-e0a40.web.app/">
                                    Live Site
                                </a>
                            </button>
                            <button>
                                <a target="_blank" href="https://github.com/Amirul-Hosain/happy-tour-client">
                                    Client Code
                                </a>
                            </button>
                            <button>
                                <a target="_blank" href="https://github.com/Amirul-Hosain/happy-tour-server">
                                    Server Code
                                </a>
                            </button>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='single-portfolio col-lg-4 col-md-6 col-12'>
                    <div style={{ width: '100%' }} id="carouselExampleControls4" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img height='220px' src={bookFornt} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img height='220px' src={iliad} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img height='220px' src={responsive} class="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls4" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls4" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>

                    <div className='title-feature'>
                        <h4>Restful Book API Project</h4>
                        <ul className='features'>
                            <li><i class="fas fa-caret-right"></i>
                                Plain JavaScript Books API project
                            </li>
                            <li><i class="fas fa-caret-right"></i>
                                When user search book then spinner loading. If search field blank and search then show an error and random book name show an error.
                            </li>
                            <li><i class="fas fa-caret-right"></i>
                                This project created by vanilla JS with book API. CSS media query used for responsive.
                            </li>
                        </ul>

                        {/* website link */}
                        <div className='website-link'>
                            <button>
                                <a target="_blank" href="https://quizzical-blackwell-87247d.netlify.app/">
                                    Live Site
                                </a>
                            </button>
                            <button>
                                <a target="_blank" href="https://github.com/Amirul-Hosain/book-world">
                                    Client Code
                                </a>
                            </button>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='single-portfolio col-lg-4 col-md-6 col-12'>
                    <div style={{ width: '100%' }} id="carouselExampleControls5" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img height='220px' src={hondaHeader} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img height='220px' src={faq} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img height='220px' src={team} class="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls5" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls5" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>

                    <div className='title-feature'>
                        <h4>Bootstrap Honda project</h4>
                        <ul className='features'>
                            <li style={{ marginBottom: '10px' }}><i class="fas fa-caret-right"></i>
                                This is Bootstrap css project.
                            </li>
                            <li><i class="fas fa-caret-right"></i>
                                It is plain bootstrap project. Here I try to use only bootstrap that I can understand i learned bootstrap properly.
                            </li>
                        </ul>

                        {/* website link */}
                        <div style={{ marginTop: '60px' }} className='website-link'>
                            <button>
                                <a target="_blank" href="https://honda-cvr-wescoff-491095.netlify.app/">
                                    Live Site
                                </a>
                            </button>
                            <button>
                                <a target="_blank" href="https://github.com/Amirul-Hosain/honda-bootstrap">
                                    Client Code
                                </a>
                            </button>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='single-portfolio col-lg-4 col-md-6 col-12'>
                    <div style={{ width: '100%' }} id="carouselExampleControls6" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img height='220px' src={shoppingFront} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img height='220px' src={cart} class="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls6" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls6" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>

                    <div className='title-feature'>
                        <h4>Vanilla JS Shopping Cart Website</h4>
                        <ul className='features'>
                            <li><i class="fas fa-caret-right"></i>
                                It is Vanilla javascript project
                            </li>
                            <li style={{ marginTop: '10px' }}><i class="fas fa-caret-right"></i>
                                Here use only JS. For clicking used click handler. Where an user can added their product and they show their product price vat and total price.
                            </li>
                        </ul>

                        {/* website link */}
                        <div style={{ marginTop: '38px' }} className='website-link'>
                            <button>
                                <a target="_blank" href="https://eager-perlman-0df5d0.netlify.app/">
                                    Live Site
                                </a>
                            </button>
                            <button>
                                <a target="_blank" href="https://github.com/Amirul-Hosain/shopping-cart">
                                    Client Code
                                </a>
                            </button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Portfolios;