import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Projects from './components/projects';
import Experience from './components/experience';
import Contact from './components/contact';

function App() {
  return (
    <div className='w-screen bg-background dark:bg-dark_background'>
      <div className="min-h-screen max-w-screen-lg mx-auto">
        <BrowserRouter>
          <br />
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
