
import React, { Component }  from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import logo from '../img/ShoppiesLogo.png';
import logo2 from '../img/ShopifyLogo.png';

import '../SASS/Nav.sass';

// import {BrowserRouter as Router,Route, NavLink, Redirect} from 'react-router-dom';

const Nav = (props) => {
  const {loginWithRedirect, logout, user, isAuthenticated} = useAuth0()
  
  let logTop =   <div className='loginTop'>
                  <h1 onClick={() => loginWithRedirect()}>Log in</h1>
                </div>

    if (isAuthenticated) {
      let logIn = document.getElementsByClassName('loggedin')

      for (let val of logIn) {
        val.style.visibility = 'visible'
      }
      logTop = <div className='logoutTop'>
      <h2>{user.name} |</h2>
      <h1 onClick={() => logout()}>Log out</h1>
    </div>
    }
          return (
            <header className="App-header">
              <div className='logoGroup'>
              <img src={logo} className="App-logo" alt="logo" />
              {logTop}
              </div>
              <div className='search'>
              <input className='loggedin' placeholder="◎ Search for Movie Title" onChange={props.inputHandler} onKeyDown={props.searchMoviesEnter}></input>
              <button className='loggedin' onClick={props.searchMovies}>Search</button>
              </div>
            </header>
        );
  }
  
  export default Nav;