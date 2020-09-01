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
                message = <h1 className='loggedin messageEmpty'>Search for a movie to nominate!</h1>;
                navarrows = '';
            }
            else if (this.props.error === true) {
                    message = <h1 className='messageInvalid'>There were no results, please search again!</h1>;
                    navarrows = '';
            }
            else {
                message = '';
                navarrows = <div className='nav-arrows'>
                                <button className="arrow left" onClick={() => this.props.moviesMove(this.props.page-1)}>›</button>
                                <h3>{this.props.page} of {this.props.totalPages}</h3>
                                <button className="arrow right" onClick={() => this.props.moviesMove(this.props.page+1)}>›</button>
                            </div>;
            }

        return (
            <div className='moviesComp'>
                {navarrows}
                {message}
                <div className='moviesContainer'>
              {this.props.movies.map((movie, index) => {
                  return <Movie movie={movie} nominated={this.props.nominated} key={movie.imdbID + movie.Year} ID={movie.imdbID + movie.Year} nominatedMovie={this.props.nominatedMovie} />
              })}
                </div>
            </div>
        )
    }
}

export default Movies