import React from 'react'
import Navbar from './components/navbar'
import Front from './components/front'
import Projects from './components/projects'
import Collab from './components/collab'
import Footer from './components/footer'
import About from './components/about'

const App = () => {
  return (
    <div>
      <Navbar />
      <Front />
      <Projects />
      <Collab />
      <About />
      <Footer />
    </div>
  )
}

export default App
