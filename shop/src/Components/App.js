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
      movies: [
        {
          "Title": "I, Robot",
          "Year": "2004",
          "imdbID": "tt0343818",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BNmE1OWI2ZGItMDUyOS00MmU5LWE0MzUtYTQ0YzA1YTE5MGYxXkEyXkFqcGdeQXVyMDM5ODIyNw@@._V1_SX300.jpg"
        },
        {
          "Title": "Robot & Frank",
          "Year": "2012",
          "imdbID": "tt1990314",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMTUzMTE0NTk4Ml5BMl5BanBnXkFtZTcwNjQ1OTMwOA@@._V1_SX300.jpg"
        },
        {
          "Title": "Robot Chicken: Star Wars",
          "Year": "2007",
          "imdbID": "tt1020990",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMTg5Mjc5OTQxM15BMl5BanBnXkFtZTcwOTM1MDk3MQ@@._V1_SX300.jpg"
        },
        {
          "Title": "Robot Overlords",
          "Year": "2014",
          "imdbID": "tt2145829",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMjM1ODc0MDgzNV5BMl5BanBnXkFtZTgwMzcyNzE1NDE@._V1_SX300.jpg"
        },
        {
          "Title": "Robot Jox",
          "Year": "1989",
          "imdbID": "tt0102800",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMGVmNjRiMTYtNDlmNC00ZTk0LWI4ZjMtMGEzMGYwMDhiOGMxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
        },
        {
          "Title": "Robot Chicken: Star Wars Episode II",
          "Year": "2008",
          "imdbID": "tt1334272",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMjIyNTg2OTcyOV5BMl5BanBnXkFtZTcwNDQxODQzNA@@._V1_SX300.jpg"
        },
        {
          "Title": "Robot Monster",
          "Year": "1953",
          "imdbID": "tt0046248",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BZmFjOGVjOWYtYmVlNi00M2QxLTg3NWUtNTU0NWE2OTdkNjliXkEyXkFqcGdeQXVyNTc4Njg5MjA@._V1_SX300.jpg"
        },
        {
          "Title": "Robot Chicken: Star Wars III",
          "Year": "2010",
          "imdbID": "tt1691338",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMjAyNTYzODM3OF5BMl5BanBnXkFtZTcwMTY4ODM4NA@@._V1_SX300.jpg"
        },
        {
          "Title": "Rogue Warrior: Robot Fighter",
          "Year": "2016",
          "imdbID": "tt4937114",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMjI1Njk0MTE1Ml5BMl5BanBnXkFtZTgwNTQ4MjM5NzE@._V1_SX300.jpg"
        },
        {
          "Title": "The Aztec Mummy Against the Humanoid Robot",
          "Year": "1958",
          "imdbID": "tt0050717",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BYTAyODI0N2YtYzMxMi00MDZlLTk4MjctOWQ3YjQ3NTIwZWVjXkEyXkFqcGdeQXVyNTc4Njg5MjA@._V1_SX300.jpg"
        }
      ]
  }
  }


  

  
  componentDidMount() {
    this._isM = true;
    setTimeout(()=> {
      axios.get('https://shopifyshoppies.onrender.com/home')
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
        <Movies movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
