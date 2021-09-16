import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Home from './Home'
import OrderOnline from './OrderOnline';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Menu from './Menu';
import Categories from './Categories';
import foods from '../data';
import '../App.css'


const App = () => {
  const [menuItem, setMenuItems] = useState(foods);

  return (
      <div id="app">
      <Header />

      <Switch>
          {/* Route is a child */}
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/orderOnline">
              <OrderOnline />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/testimonials">
              <Testimonials />
            </Route>
            <Route exact path="/menu">
              <Menu foods={menuItem} setMenuItems={setMenuItems}/> 
            </Route>
          </Switch>
        <Footer />
        
    </div>
  );
};

export default App;