import React from 'react';
import './App.css';
import {Switch, Route,Redirect } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar'; 
import Banner from './Components/Banner';
import Store from './Components/Store'
const App = () => {
  return (
    <>
      {/* <Navbar/>
      <Banner />
      <Home /> */}

    <Navbar/>


      <Switch>

      <Route exact path="/" >
        
      <Banner />
      <Home />

      </Route>

      <Route exact path="/checkout" >
      
      <Home />
      </Route>

      
      <Route exact path="/store" >
        
      
      <Store/>

      </Route>

       <Redirect to="/" />
      </Switch>
    </>
  )
}

export default App
