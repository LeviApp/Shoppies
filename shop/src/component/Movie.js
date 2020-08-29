import '../SASS/Movies.sass';

import React, { Component } from 'react';
// import {BrowserRouter as Router,Route, NavLink, Redirect} from 'react-router-dom';

class Movies extends Component {

    constructor(props) {
        super(props);
        this.state = {
         
        }
        }

        componentDidMount() {

        }


    render() {

        return (
            <div className='moviesContainer'>
              <img src={this.props.movie['Poster']} alt="" />
              <h1>{this.props.movie['Title']}</h1>
              <h2>{this.props.movie['Year']}</h2>
            </div>
        )
    }
}

export default Movie