
import React, { Component }  from 'react';
import logo from '../img/ShoppiesLogo.png';
import '../SASS/Nav.sass';


function Nav() {
    return (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <input placeholder="◎ Search for Movie Title"></input>
        </header>
    );
  }
  
  export default Nav;