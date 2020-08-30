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

        return (
            <div className='nomIndividual'>
                <img src={this.props.award['Poster']} alt="" />
                <h1>{this.props.award['Title']}</h1>
            </div>
        )
    }
}

export default NomSingle