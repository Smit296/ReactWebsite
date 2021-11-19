import React from 'react';
import { NavLink } from 'react-router-dom';
import Common from './Common';
import Web from '../src/images/Fenil.jpg';

const Home=()=>
{
  return (
      <>
         <Common name="I am" 
        imgsrc={Web}
        visit="/Projects"
        btname="My Work"
  />
  </>
  );
};

export default Home