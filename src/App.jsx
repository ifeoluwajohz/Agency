import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar'
import Home from './components/Home'
import Faq from './components/Faq'
import Footer from './components/Footer'
import About from './components/About'


import './App.css'

function App() {

  return (
    <Router>
      <Navbar />  

      
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />} />
      </Routes>
      <div id="main">
        <Faq />
        <Footer />
      </div>
    </Router>
      
      
  )
}

export default App
