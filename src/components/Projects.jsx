import React from 'react';
import bookMSImage from "../assets/book-ms.jpg";
import citybinMSImage from "../assets/citybin-ms.jpg";
import farmMSImage from "../assets/farm-ms.png";
import deliverySystemImage from "../assets/deliverysystem.png";
import harvestMSImage from "../assets/harvest-ms.png";
import TAutomation from "../assets/TAutomation.png";
import Guru99Test from "../assets/Guru99Test.png";

const projects = [
    {
        id: 1,
        name: "Library Management System (Individual Project)",
        technologies: "Java",
        image: bookMSImage,
       github: "https://github.com/navi20021234/LibraryMS",
    },

    {
        id: 2,
        name: "CityBin Smart Waste Collection System (Group Project)",
        technologies: "MERN Stack",
        image: citybinMSImage,
       github: "https://github.com/UpenaNuhansi/CityBin-Capstone-Group10",
    },

    {
        id: 3,
        name: "Farm Management System (Group Project)",
        technologies: "Figma, Laravel, PHP, MongoDB",
        image: farmMSImage,
       github: "https://github.com/sajithcode/farm-management-system-susl",
    },

    {
        id: 4,
        name: "Beauty Cosmetics Delivery System (Individual Project)",
        technologies: "MERN Stack",
        image: deliverySystemImage,
       github: "https://github.com/navi20021234/BeautyProductDeliveryWeb",
    },

     {
        id: 5,
        name: "Harvest Management System (Group Project)",
        technologies: "HTML, CSS, JavaScript, Tailwind CSS, MySQL",
        image: harvestMSImage,
       github: "https://github.com/Yasithb/Harvest-Xpert",
    },

    {
        id: 6,
        name: "Automated Web Testing (Individual Project)",
        technologies: "Java, Selenium WebDriver, TestNG, Maven, Git, IntelliJ IDEA, Chrome",
        image: TAutomation,
       github: "https://github.com/navi20021234/AutomationTesting",
    },

    {
        id: 7,
        name: "Automated Web Testing - Guru99 Demo Site (Individual Project)",
        technologies: "Java, Selenium WebDriver, TestNG, Maven, Git, IntelliJ IDEA, Chrome",
        image: Guru99Test,
       github: "https://github.com/navi20021234/Guru99-Demo-site-Automation",
    },




];

const Projects = () => {
    return (
        <div className='bg-black text-white py-20'id='project'>
        <div className='cantainer mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>My Projects</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {projects.map((project) => (
            <div key={project.id} className='bg-gray-800 p-6 rounded-lg hover: shadow-lg transform transition-transform duration-300 hover:scale-105'>
                <img src = {project.image} alt={project.name} className='rounded-lg mb-4 w-full h-48 object-cover'/>

                <h3 className='text-2xl font-bold mb-2'>{project.name}</h3>
                <p className='text-gray-400 mb-4'>{project.technologies}</p>
                <a href={project.github} className='inline-block bg-gradient-to-r from-green-400 to blue-500 text-white px-4 py-2 rounded-full' target='_blank' rel='noopener noreferrer'>GitHub</a>
                </div>                    
                ))}
                </div>
                </div>
                </div>
    )
}

export default Projects