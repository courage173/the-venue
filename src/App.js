import React from 'react';
import './resources/styles.css'
import Header from './components/header_footer/Header'
import Featured from './components/featured/index'
import VenueInfo from './components/venueInfo'


function App() {
  return (
    <div className="App" style={{height:"1500px", background: "cornflowerblue"}}>
      <Header />
      <Featured /> 
      <VenueInfo/>
    </div>
  );
}

export default App;
