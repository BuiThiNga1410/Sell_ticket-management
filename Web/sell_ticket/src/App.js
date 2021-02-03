
import React, { Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Search from './components/Search';
import ControlledCarousel from './components/Slice';
import Slice from './components/Slice';

// Lazy load - Code splitting

function App() {
  return (
    <div className="photo-app">

      <BrowserRouter>
        <Header />
        <ControlledCarousel />
        <Search />

        <Switch>


          <Route path="/photos" component={Header} />

        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
