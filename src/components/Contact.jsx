import React, { useState } from 'react'
import {FaEnvelope, FaPhone, FaMapMarkedAlt } from "react-icons/fa";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Check if all fields are filled
        if (!formData.name || !formData.email || !formData.message) {
            alert('Please fill in all fields!');
            return;
        }

        // Show success alert
        alert(`Thank you ${formData.name}! Your message has been sent successfully. I'll get back to you soon!`);
        
        // Clear the form
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div className='bg-black text-white py-20'id='contact'>
                    <div className='cantainer mx-auto px-8 md:px-16 lg:px-24'>
                        <h2 className='text-4xl font-bold text-center mb-12'>Contact Me</h2>
                         
                        <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                        <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Let's Talk</h3> 
                            <div className='flex-1'>
                           
                            <h2>Get In Touch</h2> <br></br>

                            <div className='mb-4 '>
                            <FaEnvelope className='inline-block text-green-400 mr-2'></FaEnvelope>
                                 <a href='mailto:youremail@example.com' className='hover:underline'>
                                    navinimanmini2002@gmail.com
                                 </a>
                            </div>

                            <div className='mb-4 '>
                            <FaPhone className='inline-block text-green-400 mr-2'></FaPhone>
                                 <span>+94705044967</span>
                            </div>

                            <div className='mb-4 '>
                            <FaMapMarkedAlt className='inline-block text-green-400 mr-2'></FaMapMarkedAlt>
                                 <span>No 6/70, Saranapala Na Himi MW, Hiththatiya East, Matara</span>
                            </div>
                            
                            </div>

                            <div className='flex-1 w-full max-w-2xl'>
    <form onSubmit={handleSubmit} className='space-y-6 p-6 bg-gray-900 rounded-lg'>
        <div className='flex flex-col md:flex-row md:items-center'>
            <label htmlFor='name' className='w-full md:w-40 text-white font-medium mb-2 md:mb-0'>
                Your Name
            </label>
            <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                className='flex-1 p-3 rounded bg-gray-800 border border-gray-800 focus:outline-none focus:border-green-400'
                placeholder='Enter Your Name'
            />
        </div>

        <div className='flex flex-col md:flex-row md:items-center'>
            <label htmlFor='email' className='w-full md:w-40 text-white font-medium mb-2 md:mb-0'>
                Your Email
            </label>
            <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                className='flex-1 p-3 rounded bg-gray-800 border border-gray-800 focus:outline-none focus:border-green-400'
                placeholder='Enter Your Email'
            />
        </div>

        <div className='flex flex-col md:flex-row md:items-start'>
            <label htmlFor='message' className='w-full md:w-40 text-white font-medium mb-2 md:mb-0 pt-2'>
                Message
            </label>
            <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                className='flex-1 p-3 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                rows='5'
                placeholder='Enter Your Message'
            />
        </div>

        <div className='text-center md:text-left'>
            <button 
                type='submit'
                className='bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-6 py-3 rounded-full'
            >
                Send
            </button>
        </div>
    </form>
</div>
</div>
</div>
</div>

                 
    )
}

export default Contact