import React, { Component } from 'react';
// import {BrowserRouter as Router,Route, NavLink, Redirect} from 'react-router-dom';
import '../SASS/App.sass';
import Nav from './Nav'
import Movies from './Movies'

import axios from 'axios'

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      movie: {
        "Title": "I, Robot",
        "Year": "2004",
        "Rated": "PG-13",
        "Released": "16 Jul 2004",
        "Runtime": "115 min",
        "Genre": "Action, Drama, Sci-Fi, Thriller",
        "Director": "Alex Proyas",
        "Writer": "Jeff Vintar (screenplay), Akiva Goldsman (screenplay), Jeff Vintar (screen story), Isaac Asimov (suggested by book)",
        "Actors": "Will Smith, Bridget Moynahan, Alan Tudyk, James Cromwell",
        "Plot": "In 2035, a technophobic cop investigates a crime that may have been perpetrated by a robot, which leads to a larger threat to humanity.",
        "Language": "English",
        "Country": "USA, Germany",
        "Awards": "Nominated for 1 Oscar. Another 1 win & 13 nominations.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNmE1OWI2ZGItMDUyOS00MmU5LWE0MzUtYTQ0YzA1YTE5MGYxXkEyXkFqcGdeQXVyMDM5ODIyNw@@._V1_SX300.jpg",
        "Ratings": [
          {
            "Source": "Internet Movie Database",
            "Value": "7.1/10"
          },
          {
            "Source": "Metacritic",
            "Value": "59/100"
          }
        ],
        "Metascore": "59",
        "imdbRating": "7.1",
        "imdbVotes": "489,193",
        "imdbID": "tt0343818",
        "Type": "movie",
        "DVD": "08 Jun 2004",
        "BoxOffice": "N/A",
        "Production": "N/A",
        "Website": "N/A",
        "Response": "True"
      }
  }
  }


  

  
  componentDidMount() {
    this._isM = true;
    setTimeout(()=> {
      axios.get('https://quotes-4-life.herokuapp.com/home')
      .then(response => {this.setState({quotes: response.data});
      console.log(`App.js ComponentDidMount`, response)})
      .catch(err => console.log('There is a Quote Error'))
    }, 500)
}

  componentWillUnmount() {
    this._isM = false;

  }


  inputHandler = (event) => {
    let value=event.target.value;
    let property= event.target.name;
    this.setState({[property]: value})
    if (value !== '') {
      event.target.classList.remove('empty')
    }
    else {
      if (property !== 'img_url') {
        event.target.classList.add('empty')
      }
    }
}

  render() {
    return (
      <div className='Main'>
        <Nav />
        <Movies movie={this.state.movie} />
      </div>
    );
  }
}

export default App;
