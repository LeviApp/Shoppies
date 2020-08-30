import React, { Component }  from 'react';
import NomSingle from './NomSingle'

import '../SASS/Nominated.sass';

// import {BrowserRouter as Router,Route, NavLink, Redirect} from 'react-router-dom';

class Nominated extends Component {

    constructor(props) {
        super(props);
        this.state = {
         
        }
        }

        componentDidMount() {

        }

        render() {
          return (
            <footer className="nominatedContainer">
            <h1>★ Nominated ★</h1>
            <div>
            {this.props.nominated.map(award => {
                 return <NomSingle award={award} />
             })}
            </div>
            </footer>
        );
        }

  }
  
  export default Nominated;