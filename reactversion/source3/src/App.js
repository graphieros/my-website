import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GA from '../src/utils/GoogleAnalytics';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>

      {GA.init() && <GA.RouteTracker />}

      <div className="App">
        <Header />
        <Route path='/galerie' exact component={''} />
        <Route path='/blog' exact component={''} />
        <Route path='/cle.html' component={() => {
            window.location.href = 'https://graphieros.com/cle.html';
            return null;
          }} />
        <Route path='/contact.php' component={() => {
            window.location.href = 'https://graphieros.com/contact.php';
            return null;
          }} />
      </div>

    </BrowserRouter>
  );
}

export default App;
