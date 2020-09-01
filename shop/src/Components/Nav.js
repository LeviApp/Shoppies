
import React, { Component }  from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import logo from '../img/ShoppiesLogo.png';
import logo2 from '../img/ShopifyLogo.png';

import '../SASS/Nav.sass';

// import {BrowserRouter as Router,Route, NavLink, Redirect} from 'react-router-dom';

const Nav = (props) => {
  const {isAuthenticated} = useAuth0()

    if (isAuthenticated) {
      let logIn = document.getElementsByClassName('loggedin')

      for (let val of logIn) {
        val.style.visibility = 'visible'
      }
    }
          return (
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <input className='loggedin' placeholder="◎ Search for Movie Title" onChange={props.inputHandler}></input>
              <button className='loggedin' onClick={props.searchMovies}>Search</button>
            </header>
        );
  }
  
  export default Nav;