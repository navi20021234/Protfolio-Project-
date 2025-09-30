import React from 'react'
import AboutImage from '../assets/aboutme-image.jpg'

const About = () => {
    return (
        <div className='bg-black text-white py-20'id='about'>
            <div className='cantainer mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>About Me</h2>
                <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                    <img src={AboutImage} alt="" 
                    className='w-70 h-100 rounded-cover mb-8 md:mb-0'/>
                    <div className='flex-1 text-justify'>
                    <p className='text-lg mb-8'>
                       <p>I’m a final-year Computing & Information Systems undergraduate at Sabaragamuwa University of Sri Lanka, driven by a passion for Quality Assurance Engineering, Web Development, and Frontend Design. With a GPA of 3.4 and hands-on experience in academic and real-world projects, I thrive on transforming ideas into innovative, reliable, and user-centered digital solutions.</p> <br></br>

<p>Over the years, I’ve built a balanced skill set that bridges technical expertise with leadership and strategic thinking. My journey in technology has sharpened my abilities in frontend development and quality-focused engineering, enabling me to deliver products that don’t just work—but create impact.
</p><br></br>
<p>Beyond the code, I’m actively involved in community and leadership roles. As the Volunteer Coordinator of the IEEE Student Branch at SUSL and NP SB Coordinator, I’ve had the opportunity to lead teams, collaborate with diverse stakeholders, and contribute to initiatives that shape our tech community.
</p><br></br>
<p>I believe in continuous learning, teamwork, and using technology as a tool to solve real-world problems while leaving a meaningful mark.</p>
                    </p>
                   
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default About