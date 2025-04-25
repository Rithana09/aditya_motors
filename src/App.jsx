import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Honda from './pages/Honda';
import Blog from './pages/blog';
import Contact from './pages/contact';


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/honda' element={<Honda />} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/contact' element={<Contact />} />
       
       
      </Routes>
    </Router>
  );
}

export default App;
