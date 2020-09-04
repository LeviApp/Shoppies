import '../SASS/Movie.sass';

import React, { Component } from 'react';
// import {BrowserRouter as Router,Route, NavLink, Redirect} from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';




const Movie = (props) => {
    const {user} = useAuth0()

        let nominateButton = <button onClick={() => props.nominatedMovie(props.movie, user.sub.substring(6))}>Nominate</button>
        let SRC = props.movie['Poster'];


        if (props.nominated.filter(nom => nom['imdbID']+nom['Year'] === props.ID).length === 1) {
            nominateButton = <button className='nomMovie' onClick={() => props.deleteNom(props.ID)}></button>

        }
        else if (props.nominated.length === 5) {
            nominateButton = <button disabled={true} className='nomEnough'>Limit Reached</button>
        }
        
        if (props.movie['Poster'] === 'N/A') {
            SRC = 'https://www.kindpng.com/picc/m/381-3813740_film-award-trophy-png-transparent-png.png'
        }
        

        return (
            <div className='movieIndividual'>
                <img src={SRC} alt="" />
                <div>
                    <h1>{props.movie['Title']}</h1>
                    <h2>{props.movie['Year']}</h2>
                    {nominateButton}
                </div>
            </div>
        )
    }


export default Movie