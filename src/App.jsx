import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Service from './components/Service'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Skills from './components/Skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Service />
        <Projects />
       <Contact />
     
      </div>
      
  )
}

export default App
