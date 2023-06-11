import React from 'react';
import './App.css';
import Banner from './views/Banner/Banner';
import CustomCursor from './components/Script/CustomCursor'
import Skills from './views/Skills/Skills'
import NavBar from './components/NavBar/NavBar';
import { Projects } from './views/Projects/Projects';
import {Contact} from './views/Contact/Contact';

function App() {
  return (
    <div className="App">
      <CustomCursor/>
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
