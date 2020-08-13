import React, { useState } from 'react';
import './App.css';
import Menu from '../components/Menu/Menu';
// import  Molecule  from '../components/Molecule/Molecule';

function App() {

  const [ menuState, setMenuState ] = useState({
    className: 'menuInitial'
  });

  const clickOnMenuItemHandler = () => {
    console.log("it works dude");
    setMenuState({
      className: 'menuClicked'
    });
  }

  return (
    <div className="App">
      <Menu className={menuState.className} click={clickOnMenuItemHandler}>
      </Menu>
    </div>
  );
}

export default App;
