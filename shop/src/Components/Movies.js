import '../SASS/Movies.sass';

import React, { Component } from 'react';
// import {BrowserRouter as Router,Route, NavLink, Redirect} from 'react-router-dom';
import Movie from './Movie'
import { useAuth0 } from '@auth0/auth0-react';

const Movies = (props) => {


        let message;
        let navarrows;
        const {isAuthenticated} = useAuth0()

            if (!isAuthenticated) {
                message = <div className='loggedin messageLoggedout'>
                            <h1>Welcome to the Shoppies!</h1>
                            <h2>Please log in to nominate your favorite movies.</h2>
                          </div>
            }
            else if (props.movies.length === 0 && props.error === false) {
                message = <h1 className='loggedin messageEmpty'>Search for a movie to nominate!</h1>;
                navarrows = '';
            }
            else if (props.error === true) {
                    message = <h1 className='messageInvalid'>There were no results, please search again!</h1>;
                    navarrows = '';
            }
            else {
                message = '';
                navarrows = <div className='nav-arrows'>
                                <button className="arrow left" onClick={() => props.moviesMove(props.page-1)}>›</button>
                                <h3>{props.page} of {props.totalPages}</h3>
                                <button className="arrow right" onClick={() => props.moviesMove(props.page+1)}>›</button>
                            </div>;
            }

        return (
            <div className='moviesComp'>
                {navarrows}
                {message}
                <div className='moviesContainer'>
              {props.movies.map((movie) => {
                  return <Movie movie={movie} nominated={props.nominated} key={movie.imdbID} ID={movie.imdbID} nominatedMovie={props.nominatedMovie} deleteNom={props.deleteNom} />
              })}
                </div>
            </div>
        )
    }

export default Movies