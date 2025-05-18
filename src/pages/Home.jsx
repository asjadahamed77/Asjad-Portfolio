import React from 'react'

import Header from '../components/Header'
import About from '../components/About'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
          <Navbar />
        <Header />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}

export default Home
