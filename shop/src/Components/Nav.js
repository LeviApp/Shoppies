
import React, { Component }  from 'react';
import logo from '../img/ShoppiesLogo.png';
import logo2 from '../img/ShopifyLogo.png';

import '../SASS/Nav.sass';

// import {BrowserRouter as Router,Route, NavLink, Redirect} from 'react-router-dom';

class Nav extends Component {

    constructor(props) {
        super(props);
        this.state = {
         
        }
        }

        componentDidMount() {

        }

        render() {
          return (
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <input placeholder="◎ Search for Movie Title" onChange={this.props.inputHandler}></input>
              <button onClick={this.props.searchMovies}>Search</button>
            </header>
        );
        }

  }
  
  export default Nav;