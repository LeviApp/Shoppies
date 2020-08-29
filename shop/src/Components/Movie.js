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

        return (
            <div className='movieIndividual'>
                <img src={this.props.movie['Poster']} alt="" />
                <div>
                    <h1>{this.props.movie['Title']}</h1>
                    <h2>{this.props.movie['Year']}</h2>
                    <button>Nominate</button>
                </div>
            </div>
        )
    }
}

export default Movie