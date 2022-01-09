import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Projects from './components/projects';
import Resume from './components/resume';
import Footer from './components/footer';

function App() {
  return (
    <div className='bg-background dark:bg-dark_background'>
      <div className="flex flex-col min-h-screen">
        <div className='max-w-screen-lg mx-auto'>
          <BrowserRouter>
            <br />
            <Navbar />
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </BrowserRouter>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
