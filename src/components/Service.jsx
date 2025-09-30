import React from 'react'

const services = [
    {
        id: 1,
        title: "Executive Committee Member - IEEE Student Branch SUSL",
        description: "Volunteer Coordinator of the IEEE Student Branch at SUSL. Responsible for organizing and managing volunteer activities, coordinating events, and fostering a sense of community among student members. Collaborate with other committee members to plan and execute initiatives that promote professional development, networking, and technical knowledge sharing within the branch.",
    },

    {
        id: 2,
        title: "National Project Student Branch Coordinator - IEEE SUSL",
        description: "Coordinating national-level projects and initiatives for the IEEE Student Branch.",
    },

    {
        id: 3,
        title: "Vice Chairperson - Pearlhackv3.0",
        description: "Assisting in the organization and management of the Inter university hackathon event, coordinating with participants, and ensuring a smooth execution of activities.",
    },

    {
        id: 4,
        title: "Teller, Internship Trainee - RDB Bank Pamburana Branch",
        description: "Handling cash transactions, assisting customers with their banking needs, and providing excellent customer service.",
    },

  
]

const Service = () => {
    return (
        <div className='bg-black text-white py-20'id='service'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>My Experiences</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                   {services.map(service => (
                    <div key={service.id} className='bg-gray-800 px-6 py-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105 mb-4'>
                        <div className='text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400 mb-2'>
                            {service.id}
                        </div>
                        <h3 className='mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-3'>
                            {service.title}
                        </h3>
                        <p className='mt-2 text-gray-300 text-justify pb-4'>{service.description}</p>
                     

                    </div>
                   ))}
                </div>
                </div>
                </div>
    )
}

export default Service