import React from 'react';
import styled from 'styled-components';
import About from './About';
import './App.css';
import Experience from './Experience';
import Footer from './Footer';
import Header from './Header';
import Interact from './Interact';
import Skills from './Skills';
import ViewResume from './ViewResume';


function App() {
  return (

    <div className="App">
      <Header />
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="experience">
      <Experience />
      </div>
      <ViewResume />
      <div id="contact">
        <Interact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
