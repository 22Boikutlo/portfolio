import { Button, colors } from '@mui/material'
import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import "../../public/styles/global/styles.css"
import "../../public/styles/bootstrap/bootstrap.grid.css";
//import "../../public/images/ProfilePicture.jpeg";
import AboutMe from '@/components/AboutMe';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Head from 'next/head';


const projects = () => {
  return   (  
    <>
        <Head>
            <title>Boikutlo Shaun Rampora</title>
            <meta name="description" content="This is my portfolio website showcasing all the projects I have worked and programming and soft skills I acquired over the years."/>
            <meta name="keywords" content="Software Developer, keyword2, keyword3"/>
            <meta name="robots" content="index, follow"/>
        </Head>
        <div>
            <nav className='navbar'>
                <div className='container'>
                    <ul>
                        <li><a href="#about">About Me</a></li>
                        <li><a href="#education">Education</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
            <div>
                <AboutMe/>        
            </div>
            <div>
                <Education/>
            </div>
            <div>
                <Skills/>
            </div>
            <div>
                <Projects/>
            </div>
            <div>
                <Footer/>  
            </div>
        </div>
    </>    
  )
}

export default projects