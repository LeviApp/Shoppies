import '../SASS/WinnerSingle.sass';

import React, { Component } from 'react';
// import {BrowserRouter as Router,Route, NavLink, Redirect} from 'react-router-dom';

class WinnerSingle extends Component {

    constructor(props) {
        super(props);
        this.state = {
         
        }
        }

        componentDidMount() {

        }


    render() {
        let SRC = this.props.winner['Poster'];

        if (this.props.winner['Poster'] === 'N/A') {
            SRC = 'https://www.kindpng.com/picc/m/381-3813740_film-award-trophy-png-transparent-png.png'
        }
        
        return (
            <div className='winnerIndividual'>
                <div className='card'>
                    <img src={SRC} alt="" />
                    <div>
                        <h1>{this.props.winner['Title']}</h1>
                        <h1>{this.props.winner['Year']}</h1>
                    </div>
                </div>
                <h2>Total: {this.props.winner['count']} </h2>

            </div>
        )
    }
}

export default WinnerSingle