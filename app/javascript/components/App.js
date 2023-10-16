import React from 'react';
import '../../assets/stylesheets/app.css'
import NavBar from './NabBar';
import MainSection from './MainSection';

const  App = () => {
  return (
    <div className="Main-part">
      <NavBar />
      <MainSection />
    </div>
  )
}

export default App;