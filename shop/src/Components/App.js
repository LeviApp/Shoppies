import React, { Component } from 'react';
// import {BrowserRouter as Router,Route, NavLink, Redirect} from 'react-router-dom';
import '../SASS/App.sass';
import Nav from './Nav'
import Movies from './Movies'
import Nominated from './Nominated'

import axios from 'axios'

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      search: '',
      movies: [],
      error: false,
      page: 1,
      totalPages: 0,
      nominated: [{
        "Title": "Star Wars: Episode IV - A New Hope",
        "Year": "1977",
        "imdbID": "tt0076759",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
      },
      {
        "Title": "Star Wars: Episode V - The Empire Strikes Back",
        "Year": "1980",
        "imdbID": "tt0080684",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
      },
      {
        "Title": "Star Wars: Episode VI - Return of the Jedi",
        "Year": "1983",
        "imdbID": "tt0086190",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
      },
      {
        "Title": "Star Wars: Episode VII - The Force Awakens",
        "Year": "2015",
        "imdbID": "tt2488496",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg"
      },
      {
        "Title": "Star Wars: Episode I - The Phantom Menace",
        "Year": "1999",
        "imdbID": "tt0120915",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
      }]
  }
  }


  

  
  componentDidMount() {

  }

  componentWillUnmount() {

  }


  inputHandler = (event) => {

    let value=event.target.value;
    this.setState({"search": value})
  }

searchMovies = () => {
    axios.get(`http://www.omdbapi.com/?s=${this.state.search}&type=movie&page=1&apikey=e7fa079b`)
    .then(response => {
      if (response.data['Response'] === 'True') {
        this.setState({movies: response.data['Search'], page: 1, totalPages: Math.ceil(Number(response.data['totalResults'])/10), error: false, });
      }

      else {
        this.setState({movies: [], error: true})
      }
  }
   )
    .catch(err => this.setState({movies: []}))
}

moviesMove = (val) => {
  let correctVal = val;
  if (correctVal === this.state.totalPages+1) {
    correctVal = 1
  }
  else if (correctVal === 0) {
    correctVal = this.state.totalPages
  }
  axios.get(`http://www.omdbapi.com/?s=${this.state.search}&type=movie&page=${correctVal}&apikey=e7fa079b`)
  .then(response => {
    if (response.data['Response'] === 'True') {
      this.setState({movies: response.data['Search'], page: correctVal, totalPages: Math.ceil(Number(response.data['totalResults'])/10), error: false, });
    }

    else {
      this.setState({movies: [], error: true})
    }
}
 )
  .catch(err => this.setState({movies: []}))
}

  render() {
    return (
      <div className='Main'>
        <Nav inputHandler={this.inputHandler} searchMovies={this.searchMovies} />
        <Movies movies={this.state.movies} error={this.state.error} totalPages={this.state.totalPages} page={this.state.page} moviesMove={this.moviesMove} />
        <Nominated nominated={this.state.nominated} />
      </div>
    );
  }
}

export default App;
