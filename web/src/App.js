import React from 'react';
import './App.scss';

// Components
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import About from './components/About';
import Gallery from './components/Gallery';
import Members from './components/Members';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <Hero />
      <Destinations />
      <About />
      <Gallery />
      <Members />
      <Register />
    </div>
  );
}

export default App;
