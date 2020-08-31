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
            <section>
                <div className='loggedin nombutton'>
                    <h1>★ Nominated ★</h1>
                    <button className='nominatedarrow' onClick={() => this.props.nominatedShow()}>›</button>
                </div>

                <div className='login'>
                    <h1 onClick={this.props.loggedIn}>Login</h1>
                </div>
            </section>
            <div className='nominated'>
            {this.props.nominated.map(award => {
                 return <NomSingle key={award.imdbID + award.Title} award={award} />
             })}
            </div>
            </footer>
        );
        }

  }
  
  export default Nominated;