import React from 'react';
import Header from '../components/Header/Header';
import './App.css';
import clouds from '../assets/clouds.png';

function App() {

  const style= {
    backgroundImage: `url(${clouds})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'repeat'
  }

  return (
    <div className="App">
      <Header className="mainHeader" />
      <div className="back" style={style}>
      </div>
    </div>
  );
}

export default App;
