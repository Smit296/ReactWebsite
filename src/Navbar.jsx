import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';


const Navbar=()=>
{
    return (
    <>
    
    <div className='container-fluid nav_bg'>
        <div className='row'>
            <div className='col-10 mx-auto'>


        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
  <NavLink className="navbar-brand" to='/'>Smit Donga</NavLink>
  

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">

      <li className="nav-item active">
        <NavLink activeClassName='manu_active' exact className="nav-link active" to="/">Home</NavLink>
      </li>

      <li className="nav-item">
        <NavLink activeClassName='manu_active' className="nav-link" to="/About">About</NavLink>
      </li>
     
      <li className="nav-item">
        <NavLink activeClassName='manu_active' className="nav-link" to="/Projects">Projects</NavLink>
      </li>
     
      <li className="nav-item">
        <NavLink activeClassName='manu_active' className="nav-link" to="/Contact">Contact</NavLink>
      </li>

    </ul>
   </div>
  </div>
</nav>
</div>

        </div>
    </div>


    </>
    );
};

export default Navbar
