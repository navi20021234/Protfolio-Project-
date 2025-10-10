import React from 'react'

const Skills = () => {
  return (
    <div className='bg-black text-white py-20' id='skills'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>My Skills</h2>
        <h4 className='text-2xl font-bold  mb-12'>My Technical Skills</h4>
       

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          
          {/* Column 1: Programming Languages */}
          <div className='space-y-4'>
            <h3 className='text-xl font-semibold text-center mb-4 text-green-400'>Programming Languages</h3>
            
            <div className='flex items-center'>
              <label htmlFor="javascript" className='w-3/12 text-sm'>JavaScript</label>
              <div className='grow bg-gray-800 rounded-full h-2.5'>
                <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12'>
                </div>
              </div>
            </div>

            <div className='flex items-center'>
              <label htmlFor="java" className='w-3/12 text-sm'>Java</label>
              <div className='grow bg-gray-800 rounded-full h-2.5'>
                <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-8/12'>
                </div>
              </div>
            </div>

            <div className='flex items-center'>
              <label htmlFor="c-programming" className='w-3/12 text-sm'>C</label>
              <div className='grow bg-gray-800 rounded-full h-2.5'>
                <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-7/12'>
                </div>
              </div>
            </div>

            <div className='flex items-center'>
              <label htmlFor="csharp" className='w-3/12 text-sm'>HTML</label>
              <div className='grow bg-gray-800 rounded-full h-2.5'>
                <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-5/12'>
                </div>
              </div>
            </div>

            <div className='flex items-center'>
              <label htmlFor="php" className='w-3/12 text-sm'>CSS</label>
              <div className='grow bg-gray-800 rounded-full h-2.5'>
                <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-4/12'>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Frontend Technologies */}
          <div className='space-y-4'>
            <h3 className='text-xl font-semibold text-center mb-4 text-blue-400'>Frameworks & Databases</h3>
            
            <div className='flex items-center'>
              <label htmlFor="htmlcss" className='w-3/12 text-sm'>JUnit</label>
              <div className='grow bg-gray-800 rounded-full h-2.5'>
                <div className='bg-gradient-to-r from-pink-400 to-purple-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12'>
                </div>
              </div>
            </div>

            <div className='flex items-center'>
              <label htmlFor="react" className='w-3/12 text-sm'>Postman</label>
              <div className='grow bg-gray-800 rounded-full h-2.5'>
                <div className='bg-gradient-to-r from-pink-400 to-purple-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-1/12'>
                </div>
              </div>
            </div>

            <div className='flex items-center'>
              <label htmlFor="tailwind" className='w-3/12 text-sm'>Selenium</label>
              <div className='grow bg-gray-800 rounded-full h-2.5'>
                <div className='bg-gradient-to-r from-pink-400 to-purple-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-5/12'>
                </div>
              </div>
            </div>

            <div className='flex items-center'>
              <label htmlFor="bootstrap" className='w-3/12 text-sm'>MongoDB</label>
              <div className='grow bg-gray-800 rounded-full h-2.5'>
                <div className='bg-gradient-to-r from-pink-400 to-purple-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-1/12'>
                </div>
              </div>
            </div>

            <div className='flex items-center'>
              <label htmlFor="sass" className='w-3/12 text-sm'>MySQL</label>
              <div className='grow bg-gray-800 rounded-full h-2.5'>
                <div className='bg-gradient-to-r from-pink-400 to-purple-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-5/12'>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Tools & QA */}
          <div className='space-y-4'>
            <h3 className='text-xl font-semibold text-center mb-4 text-yellow-400'>Tools & Libraries</h3>
            
            <div className='flex items-center'>
              <label htmlFor="git" className='w-3/12 text-sm'>Git</label>
              <div className='grow bg-gray-800 rounded-full h-2.5'>
                <div className='bg-gradient-to-r from-yellow-400 to-orange-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-8/12'>
                </div>
              </div>
            </div>

            <div className='flex items-center'>
              <label htmlFor="selenium" className='w-3/12 text-sm'>Tailwind CSS</label>
              <div className='grow bg-gray-800 rounded-full h-2.5'>
                <div className='bg-gradient-to-r from-yellow-400 to-orange-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-5/12'>
                </div>
              </div>
            </div>

            <div className='flex items-center'>
              <label htmlFor="postman" className='w-3/12 text-sm'>React</label>
              <div className='grow bg-gray-800 rounded-full h-2.5'>
                <div className='bg-gradient-to-r from-yellow-400 to-orange-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-1/12'>
                </div>
              </div>
            </div>

            <div className='flex items-center'>
              <label htmlFor="vscode" className='w-3/12 text-sm'>MS Excel</label>
              <div className='grow bg-gray-800 rounded-full h-2.5'>
                <div className='bg-gradient-to-r from-yellow-400 to-orange-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-11/12'>
                </div>
              </div>
            </div>

            <div className='flex items-center'>
              <label htmlFor="figma" className='w-3/12 text-sm'>Figma</label>
              <div className='grow bg-gray-800 rounded-full h-2.5'>
                <div className='bg-gradient-to-r from-yellow-400 to-orange-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12'>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Soft Skills Section */}
        <h4 className='text-2xl font-bold  mt-16 mb-12'>My Soft Skills</h4>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div className='space-y-4'>
            <h3 className='text-xl font-semibold text-center mb-4 text-purple-400'>Leadership & Communication</h3>
            
            <div className='flex items-center'>
              <label htmlFor="problem-solving" className='w-3/12 text-sm'>Problem-Solving</label>
              <div className='grow bg-gray-800 rounded-full h-2.5'>
                <div className='bg-gradient-to-r from-purple-400 to-pink-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-6/12'>
                </div>
              </div>
            </div>

            <div className='flex items-center'>
              <label htmlFor="communication" className='w-3/12 text-sm'>Communication</label>
              <div className='grow bg-gray-800 rounded-full h-2.5'>
                <div className='bg-gradient-to-r from-purple-400 to-pink-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-8/12'>
                </div>
              </div>
            </div>

            <div className='flex items-center'>
              <label htmlFor="leadership" className='w-3/12 text-sm'>Leadership</label>
              <div className='grow bg-gray-800 rounded-full h-2.5'>
                <div className='bg-gradient-to-r from-purple-400 to-pink-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-8/12'>
                </div>
              </div>
            </div>
          </div>

          <div className='space-y-4'>
            <h3 className='text-xl font-semibold text-center mb-4 text-teal-400'>Adaptability & Growth</h3>
            
            <div className='flex items-center'>
              <label htmlFor="adaptability" className='w-3/12 text-sm'>Adaptability</label>
              <div className='grow bg-gray-800 rounded-full h-2.5'>
                <div className='bg-gradient-to-r from-teal-400 to-cyan-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12'>
                </div>
              </div>
            </div>

            <div className='flex items-center'>
              <label htmlFor="time-management" className='w-3/12 text-sm'>Time Management</label>
              <div className='grow bg-gray-800 rounded-full h-2.5'>
                <div className='bg-gradient-to-r from-teal-400 to-cyan-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-8/12'>
                </div>
              </div>
            </div>

            <div className='flex items-center'>
              <label htmlFor="learning" className='w-3/12 text-sm'>Quick Learning</label>
              <div className='grow bg-gray-800 rounded-full h-2.5'>
                <div className='bg-gradient-to-r from-teal-400 to-cyan-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-8/12'>
                </div>
              </div>
            </div>
          </div>

          <div className='space-y-4'>
            <h3 className='text-xl font-semibold text-center mb-4 text-orange-400'>Collaboration & Quality</h3>
            
            <div className='flex items-center'>
              <label htmlFor="teamwork" className='w-3/12 text-sm'>Team Work</label>
              <div className='grow bg-gray-800 rounded-full h-2.5'>
                <div className='bg-gradient-to-r from-orange-400 to-red-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12'>
                </div>
              </div>
            </div>

            <div className='flex items-center'>
              <label htmlFor="attention" className='w-3/12 text-sm'>Attention to Detail</label>
              <div className='grow bg-gray-800 rounded-full h-2.5'>
                <div className='bg-gradient-to-r from-orange-400 to-red-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-8/12'>
                </div>
              </div>
            </div>

            <div className='flex items-center'>
              <label htmlFor="critical-thinking" className='w-3/12 text-sm'>Critical Thinking</label>
              <div className='grow bg-gray-800 rounded-full h-2.5'>
                <div className='bg-gradient-to-r from-orange-400 to-red-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-6/12'>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills