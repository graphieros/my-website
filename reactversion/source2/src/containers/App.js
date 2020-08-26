import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
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

function App() {

  const style = {
    backgroundImage: `url(${clouds})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'repeat'
  }

  return (

    <BrowserRouter>

      <div className="App">
        <Header className="mainHeader" />

        <Route path='/parcours' exact component={Parcours} />
        <Route path='/parcours/bio' exact component={Bio} />
        <Route path='/parcours/media' exact component={Media} />
        <Route path='/parcours/outils' exact component={Outils} />

        <Route path='/art' exact component={Art} />
        <Route path='/art/galerie' exact component={Galerie} />
        <Route path='/art/graphieros' exact component={Graphieros} />
        <Route path='/art/livres' exact component={Livres} />

        <Route path='/webDev' exact component={WebDev} />
        <Route path='contact.php' exact />

        <div className="back" style={style} />
        
      </div>
    </BrowserRouter>

  );
}

export default App;
