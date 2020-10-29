import '../SASS/NomSingle.sass';

import React, { Component } from 'react';
// import {BrowserRouter as Router,Route, NavLink, Redirect} from 'react-router-dom';

class NomSingle extends Component {

    constructor(props) {
        super(props);
        this.state = {
         
        }
        }

        componentDidMount() {

        }


    render() {
        let SRC = this.props.award['Poster'];
        let deselect = <h1 className='deselect' onClick={() => this.props.deleteNom(this.props.ID, [this.props.award])}>Deselect</h1>

        if (this.props.award['Poster'] === 'N/A') {
            SRC = 'https://www.kindpng.com/picc/m/381-3813740_film-award-trophy-png-transparent-png.png'
        }
        
        if (this.props.award['imdbID'] === 'empty') {
            deselect = ""
        }

        return (
            <div className='nomIndividual'>
                {deselect}
                <div className='card'>
                    <img src={SRC} alt="" />
                    <div>
                        <h1>{this.props.award['Title']}</h1>
                        <h1>{this.props.award['Year']}</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default NomSingle