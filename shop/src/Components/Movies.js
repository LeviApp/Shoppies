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
        let message;
            if (this.props.movies.length === 0 && this.props.error === false) {
                message = <h1 className='messageEmpty'>Search for a movie to nominate!</h1>
            }
            else if (this.props.error === true) {
                    message = <h1 className='messageInvalid'>There were no results, please search again!</h1>
            }
            else {
                message = '';
            }

        return (
            <div className='moviesContainer'>
                {message}
              {this.props.movies.map(movie => {
                  return <Movie movie={movie} />
              })}
            </div>
        )
    }
}

export default Movies