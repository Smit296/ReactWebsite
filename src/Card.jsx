import React from 'react';
import { NavLink } from 'react-router-dom';

import {useHistory} from 'react-router-dom';

import { useState,useEffect } from "react";
import Sdata from './Sdata';
// Plugins
// Import the main component
import { Viewer } from '@react-pdf-viewer/core'; // install this library
// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; // install this library
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// Worker
import { Worker } from '@react-pdf-viewer/core'; // install this library

const Card=(props)=>
{
 
  let history = useHistory();
  /*const [click, setClicked] = useState(
    {
      clicked:""
    }
  );*/
  /*useEffect(() => {
    // Update the document title using the browser API
    clicked=props.clicked;
  });*/

  
 
   // const {name,value} =event.target;
    
   const  setClicked=(e)=>
    {
    
    if(props.clicked=="clicked1")
    {

    
      history.push("/Dairyphoto");
  
    
    }
    else if(props.clicked=="clicked2")
    {
      history.push("/CafePhoto");
    }

    else if(props.clicked=="clicked3")
    {
      history.push("/IntPhoto");
    }
    
    else if(props.clicked=="clicked4")
    {
      history.push("/HousePhoto");
    }
    else if(props.clicked=="clicked5")
    {
      history.push("/LandPhoto");
    }
    
    
  }
    

  return (
      <>
                   
    
       
                    <div className='col-md-4 h-100'>
                    <div className="card">
                        <img className="card-img-top" src={props.imgsrc} alt={props.imgsrc} />
                        <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text"></p>
                        <button className="btn btn-primary" onClick={()=>setClicked()}>Photos</button>
                        
                     
                        </div>
                    </div>
                    </div>
                   
                   
                    



      </>
  );
};

export default Card