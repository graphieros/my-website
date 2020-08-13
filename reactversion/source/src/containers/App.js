import React, { useState } from 'react';
import './App.css';
import Menu from '../components/Menu/Menu';
// import  Molecule  from '../components/Molecule/Molecule';

function App() {

  const origin = 'menuInitial';
  const destination = 'menuClicked';


  let [ menuState, setMenuState ] = useState ({
    className: origin
  });

  const clickOnMenuItemHandler = () => {
    setMenuState({
      className: destination
    });
  } 

  const resetMenuHandler = () => {
    setMenuState({
      className: origin
    })
  }

  return (
    <div className="App">
      <Menu className={menuState.className} buttonAction = {clickOnMenuItemHandler}> 
      </Menu>
      <div id="resetMenu" onClick={resetMenuHandler}></div>
    </div>
  );
}

export default App;
