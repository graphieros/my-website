import React, { useState } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import LandingPage from '../components/LandingPage';
import Header from '../components/Header/Header';
import Parcours from './Parcours';
import WebDev from './WebDev';
import Art from './Art';
import Bio from './Bio';
import Media from './Media';
import Outils from './Outils';
import Galerie from './Galerie';
import Graphieros from './Graphieros';
import Livres from './Livres';
import '././css/App.css';
import clouds from '../assets/clouds.png';

const App = () => {

  const style = {
    backgroundImage: `url(${clouds})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'repeat'
  }

  const [landingState, setLandingState] = useState({
    className: 'landingVisible'
  });


  const handleCloseLanding = () => {
    setLandingState({
      className: 'hidden'
    });
  }

  return (
    <BrowserRouter>

      <div className="App">

        <LandingPage
          className={landingState.className}
          close={handleCloseLanding}
        />

        <Header 
          className='mainHeader'
        />

        <Route path='/parcours' exact component={Parcours} />
        <Route path='/parcours/bio' exact component={Bio} />
        <Route path='/parcours/media' exact component={Media} />
        <Route path='/parcours/outils' exact component={Outils} />

        <Route path='/art' exact component={Art} />
        <Route path='/art/galerie' exact component={Galerie} />
        <Route path='/art/graphieros' exact component={Graphieros} />
        <Route path='/art/livres' exact component={Livres} />

        <Route path='/webDev' exact component={WebDev} />
        <Route path='/contact.php' component={() => {
          window.location.href = 'https://graphieros.com/contact.php';
          return null;
        }} />

        <a
          className='touchWriterLink'
          target='_blank'
          rel="noopener noreferrer"
          href="https://graphieros.com/touch_writer/touch_writer.html">
          éditeur de graphieros
            </a>

        <a
          className='cleLink'
          target='_blank'
          rel='noopener noreferrer'
          href='https://graphieros.com/cle.html'>
          Lire La clé
            </a>

        <div className="back" style={style} />

      </div>
    </BrowserRouter>

  );
}


export default App;