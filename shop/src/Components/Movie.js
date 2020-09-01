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


        if (this.props.nominated.filter(nom => nom['imdbID']+nom['Year'] === this.props.ID).length === 1) {
            nominateButton = <button disabled={true} className='nomMovie'>Nominated</button>

        }
        else if (this.props.nominated.length === 5) {
            nominateButton = <button disabled={true} className='nomEnough'>Limit Reached</button>
        }
        return (
            <div className='movieIndividual'>
                <img src={this.props.movie['Poster']} alt="" />
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