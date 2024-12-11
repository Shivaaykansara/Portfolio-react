import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
