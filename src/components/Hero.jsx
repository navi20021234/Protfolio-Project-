import React from 'react'
import HeroImage from '../assets/hero-image.png'
import {FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
    const handleResumeClick = () => {
        // Option 1: Open resume in new tab
        window.open('/resume.pdf', '_blank');
       
    };

    return (
        <div className='bg-black text-white text-center py-16'>
            <img src={HeroImage} alt="" 
            className='mx-auto mb-8 w-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105'/>
            <h1 className='text-4xl font-bold'>
                I'm {" "}
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Navini Rubasinghe</span>
                ,  QA Enthusiast & Aspiring Front End Developer
            </h1>
            <p className='mt-4 text-lg text-gray-300 '>
                QA enthusiast & aspiring frontend developer passionate about building reliable, user-focused digital experiences
            </p>
            <div className='mt-8 space-x-4'>
               
                <button 
                    onClick={handleResumeClick}
                    className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'
                >
                    Resume
                </button>
            </div>
            
            <div className='mt-6'>
                <div className='flex justify-center space-x-4 my-4 md:my-0'>
                    <a href='https://github.com/navi20021234' className='text-gray-400 hover:text-white'>
                        <FaGithub/>
                    </a>
                    <a href='https://web.facebook.com/navini.rubasighe' className='text-gray-400 hover:text-white'>
                        <FaFacebook/>
                    </a>
                   
                    <a href='https://www.linkedin.com/in/navini-manmini-1b86b72a1/' className='text-gray-400 hover:text-white'>
                        <FaLinkedin/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero