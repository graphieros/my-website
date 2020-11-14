import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GA from '../src/utils/GoogleAnalytics';
import './App.css';
import Header from './components/Header';
import Landing from './components/Landing';
import GlyphList from './components/GlyphList';
import Gallery from './components/Gallery';
import Blog from './components/Blog';
import Alp from './components/Alp';
import FractalSpace from './components/FractalSpace';
import Kio from './components/graphieros_subsite/Kio';
import Pangolin from './components/Pangolin';
import Login from './components/Login';
import Paragraphs from './components/Paragraphs';
import LeLivre from './components/LeLivre';
import FAQ from './components/FAQ';

function App() {

  //simple react login _ axios requests API
  //host backend heroku

  return (
    <BrowserRouter>

      {GA.init() && <GA.RouteTracker />}

      <div className="App">
        <Header />

        <Switch>
          <Route path='/login' exact component={Login} />
          <Route path='/kio' exact component={Kio} />
          <Route path='/fractalspace' exact component={FractalSpace} />
          <Route path='/alp' exact component={Alp} />
          <Route path='/' exact component={Landing} />
          <Route path='/glyphes' exact component={GlyphList} />
          <Route path='/galerie' exact component={Gallery} />
          <Route path='/blog' exact component={Blog} />
          <Route path='/labyrinthe' exact component={Pangolin} />
          <Route path='/paragraph' exact component={Paragraphs}/>
          <Route path='/livre' exact component={LeLivre} />
          <Route path='/faq' exact component={FAQ} />
          <Route path='/cle.html' component={() => {
            window.location.href = 'https://graphieros.com/cle.html';
            return null;
          }} />
          <Route path='/contact.php' component={() => {
            window.location.href = 'https://graphieros.com/contact.php';
            return null;
          }} />
          <Route path='/journal.html' component={() => {
            window.location.href = 'https://graphieros.com/journal.html';
            return null;
          }} />
        </Switch>
      </div>

    </BrowserRouter>
  );
}

export default App;
