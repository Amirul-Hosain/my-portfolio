import React, { useEffect } from 'react';
import './Skills.css';
import AOS from "aos";
import "aos/dist/aos.css";
import html from '../../../src/images/skills/html9.png'
import html5 from '../../../src/images/skills/html-5.png'
import css3 from '../../../src/images/skills/css3.png'
import react from '../../../src/images/skills/react.png'
import js from '../../../src/images/skills/js.png'
import node from '../../../src/images/skills/node-js-icon.png'
import bootstrap from '../../../src/images/skills/bootstrap.png'
import mongo from '../../../src/images/skills/mongo.png'
import tailwind from '../../../src/images/skills/tailwind-css.png'
import firebase from '../../../src/images/skills/Firebase_Logopng.png'
import github from '../../../src/images/skills/github_PNG28.png'
import material from '../../../src/images/skills/material.png'
import mobile from '../../../src/images/skills/mobile.png'

const Skills = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    });

    return (
        <div style={{ marginTop: '150px', marginBottom: '100px' }}>
            <h2 className='title'>SKILLS</h2>
            <div>
                <div className='row container m-auto'>

                    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='single-skill col-lg-2 col-md-3 col-4'>
                        <img src={html} alt="" />
                        <h4>HTML</h4>
                    </div>
                    <div className='single-skill col-lg-2 col-md-3 col-4'>
                        <img src={react} alt="" />
                        <h4>React</h4>
                    </div>
                    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='single-skill col-lg-2 col-md-3 col-4'>
                        <img src={css3} alt="" />
                        <h4>CSS3</h4>
                    </div>
                    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='single-skill col-lg-2 col-md-3 col-4'>
                        <img src={js} alt="" />
                        <h4>JavaScript</h4>
                    </div>
                    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='single-skill col-lg-2 col-md-3 col-4'>
                        <img src={bootstrap} alt="" />
                        <h4>Bootstrap</h4>
                    </div>
                    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='single-skill col-lg-2 col-md-3 col-4'>
                        <img src={mongo} alt="" />
                        <h4>MongoDB</h4>
                    </div>
                    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='single-skill col-lg-2 col-md-3 col-4'>
                        <img src={html5} alt="" />
                        <h4>HTML5</h4>
                    </div>
                    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='single-skill col-lg-2 col-md-3 col-4'>
                        <img src={firebase} alt="" />
                        <h4>Firebase</h4>
                    </div>
                    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='single-skill col-lg-2 col-md-3 col-4'>
                        <img src={node} alt="" />
                        <h4>Node</h4>
                    </div>
                    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='single-skill col-lg-2 col-md-3 col-4'>
                        <img src={material} alt="" />
                        <h4>Material ui</h4>
                    </div>
                    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='single-skill col-lg-2 col-md-3 col-4'>
                        <img src={github} alt="" />
                        <h4>GitHub</h4>
                    </div>
                    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='single-skill col-lg-2 col-md-3 col-4'>
                        <img src={tailwind} alt="" />
                        <h4>Tailwind CSS</h4>
                    </div>

                </div>
            </div>
            <br />
            <div >
                <div className='row container  m-auto mt-4 '>
                    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className=' work-type col-lg-3 col-md-4  col-sm-6'>
                        <img src={html5} alt="" />
                        <h4>Web Design</h4>
                    </div>
                    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className=' work-type col-lg-3 col-md-4  col-sm-6'>
                        <img src={react} alt="" />
                        <h4>Web Development</h4>
                    </div>
                    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className=' work-type col-lg-3 col-md-4  col-sm-6'>
                        <img src={mobile} alt="" />
                        <h4>Responsive Design</h4>
                    </div>
                    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className=' work-type col-lg-3 col-md-4  col-sm-6'>
                        <img src={node} alt="" />
                        <h4>Back End Development</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;