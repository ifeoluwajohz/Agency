import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/Navbar'
import Welcome from './components/Welcome'
import Faq from './components/Faq'
import Footer from './components/Footer'


import './App.css'

function App() {

  return (
    <Router>
      <div id="main">
        <Navbar />  
        <Welcome />
        <Faq />
        <Footer />
      </div>
    </Router>
      
      
  )
}

export default App
