import React from 'react';
import './App.css';
import User from './components/User';
import Skills from './components/Skills';
import Profil from './components/Profil';
import FormationsExperiences from './components/FormationsExperiences';

function App() {
  return (
    <div className="App">
      <div className="grid__container">
        <div className="sidebar">
          <User />
          <Skills />
        </div>
        <div className="main">
          <Profil />
          <FormationsExperiences />
        </div>
      </div>
    </div>
  );
}

export default App;
