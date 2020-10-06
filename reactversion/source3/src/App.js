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
import Words from './components/Words';
import FractalSpace from './components/FractalSpace';
import Kio from './components/graphieros_subsite/Kio';

function App() {

  return (
    <BrowserRouter>

      {GA.init() && <GA.RouteTracker />}

      <div className="App">
        <Header />
  
        <Switch>
          <Route path='/kio' exact component={Kio} />
          <Route path='/fractalspace' exact component={FractalSpace} />
          <Route path='/alp' exact component={Alp} />
          <Route path='/' exact component={Landing} />
          <Route path='/mots' exact component={Words} />
          <Route path='/glyphes' exact component={GlyphList} />
          <Route path='/galerie' exact component={Gallery} />
          <Route path='/blog' exact component={Blog} />
          <Route path='/cle.html' component={() => {
            window.location.href = 'https://graphieros.com/cle.html';
            return null;
          }} />
          <Route path='/contact.php' component={() => {
            window.location.href = 'https://graphieros.com/contact.php';
            return null;
          }} />
        </Switch>
      </div>

    </BrowserRouter>
  );
}

export default App;
