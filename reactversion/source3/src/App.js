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
      </div>

    </BrowserRouter>
  );
}

export default App;
