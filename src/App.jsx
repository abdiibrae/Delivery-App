import React  from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Security from './Components/Security/Security'
import Title from './Components/Title/Title'
import Services from './Components/Services/Services'
import Apps from './Components/App/Apps'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

function App() {
 

  return (
    <>
   <Navbar/>
   <div className='container'>
   <Hero/>
   <About/>
   <Security/>
   <Title title='Some Services We  Offer'/>
   <Services/>
   <Apps/>
   <Contact/>
   
   </div>
   <Footer/>

    </>
  )
}

export default App
