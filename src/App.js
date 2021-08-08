import React from 'react';
import {Switch, Route, Redirect } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';
import './App.css';
import './index.css';

const App=()=>
{
  return (
    <>
    <Navbar/>
  <Switch>
  <Route exact path='/' component={Home}></Route>
  <Route exact path='/about' component={About}></Route>
  <Route exact path='/projects' component={Projects}></Route>
  <Route exact path='/contact' component={Contact}></Route>
  <Redirect to='/'></Redirect>
  </Switch>
  <Footer/>
  </>
  );
};

export default App