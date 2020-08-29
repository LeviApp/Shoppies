import '../SASS/Movies.sass';

import React, { Component } from 'react';
// import {BrowserRouter as Router,Route, NavLink, Redirect} from 'react-router-dom';
import Movie from './Movie'

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
              {this.props.movies.map(movie => {
                  return <Movie movie={movie} />
              })}
            </div>
        )
    }
}

export default Movies