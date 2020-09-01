import '../SASS/Movie.sass';

import React, { Component } from 'react';
// import {BrowserRouter as Router,Route, NavLink, Redirect} from 'react-router-dom';

class Movie extends Component {

    constructor(props) {
        super(props);
        this.state = {
         
        }
        }

        componentDidMount() {

        }


    render() {
        let nominateButton = <button onClick={() => this.props.nominatedMovie(this.props.movie)}>Nominate</button>
        let SRC = this.props.movie['Poster'];


        if (this.props.nominated.filter(nom => nom['imdbID']+nom['Year'] === this.props.ID).length === 1) {
            nominateButton = <button className='nomMovie' onClick={() => this.props.deleteNom(this.props.ID)}></button>

        }
        else if (this.props.nominated.length === 5) {
            nominateButton = <button disabled={true} className='nomEnough'>Limit Reached</button>
        }
        
        if (this.props.movie['Poster'] === 'N/A') {
            SRC = 'https://www.kindpng.com/picc/m/381-3813740_film-award-trophy-png-transparent-png.png'
        }
        

        return (
            <div className='movieIndividual'>
                <img src={SRC} alt="" />
                <div>
                    <h1>{this.props.movie['Title']}</h1>
                    <h2>{this.props.movie['Year']}</h2>
                    {nominateButton}
                </div>
            </div>
        )
    }
}

export default Movie