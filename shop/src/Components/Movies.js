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
        let navarrows;
            if (this.props.movies.length === 0 && this.props.error === false) {
                message = <h1 className='messageEmpty'>Search for a movie to nominate!</h1>;
                navarrows = '';
            }
            else if (this.props.error === true) {
                    message = <h1 className='messageInvalid'>There were no results, please search again!</h1>;
                    navarrows = '';
            }
            else {
                message = '';
                navarrows = <div className='nav-arrows'>
                                <button class="arrow left">›</button>
                                <h3>{this.props.page} of {this.props.totalPages}</h3>
                                <button class="arrow right">›</button>
                            </div>;
            }

        return (
            <div className='moviesComp'>
                {navarrows}
                {message}
                <div className='moviesContainer'>
              {this.props.movies.map(movie => {
                  return <Movie movie={movie} />
              })}
                </div>
            </div>
        )
    }
}

export default Movies