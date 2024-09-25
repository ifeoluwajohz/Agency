import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar'
import Home from './components/Home'
import Faq from './components/Faq'
import Footer from './components/Footer'
import About from './components/About'
import Services from './components/Services'

import Previous_project from './components/Previous_project';


import './App.css'

function App() {

  return (
    <Router>
      <Navbar />  

      
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Services />} />
        <Route path='/previous-project' element={<Previous_project />} />


      </Routes>
      <div id="main">
        <Faq />
        <Footer />
      </div>
    </Router>
      
      
  )
}

export default App
