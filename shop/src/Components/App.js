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
        "Title": "Nominated Movies",
        "Year": "",
        "imdbID": "empty",
        "Type": "movie",
        "Poster": "https://www.kindpng.com/picc/m/381-3813740_film-award-trophy-png-transparent-png.png"
      }],
      open: false,
  }
  }

  

  
  componentDidMount() {
    // axios.get('http://127.0.0.1:8000/shoppies/api/awards/', {
    //   headers: {
    //     userID: '4444'
    //   }
    //  }).then(response => {
    //    if (response.data.length >=1) {
    //     this.setState({nominated: response.data});
    //    }

    //    else {
    //     this.setState({nominated: [{
    //       "Title": "Nominated Movies",
    //       "Year": "",
    //       "imdbID": "empty",
    //       "Type": "movie",
    //       "Poster": "https://www.kindpng.com/picc/m/381-3813740_film-award-trophy-png-transparent-png.png"
    //     }]});

    //    }}).catch(err => console.log('There is a Quote Error'))


  }

  componentWillUnmount() {

  }


  inputHandler = (event) => {

    let value=event.target.value;
    this.setState({"search": value})
  }

  loggedIn = () => {
    let logIn = document.getElementsByClassName('loggedin')

    for (let val of logIn) {
      val.style.visibility = 'visible'
    }
  }

searchMovies = () => {
    axios.get(`https://www.omdbapi.com/?s=${this.state.search}&type=movie&page=1&apikey=e7fa079b`)
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
  axios.get(`https://www.omdbapi.com/?s=${this.state.search}&type=movie&page=${correctVal}&apikey=e7fa079b`)
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

nominatedShow = () => {
  let nom = document.getElementsByClassName('nominated')[0]
  let nomarr = document.getElementsByClassName('nominatedarrow')[0]

  if (this.state.open === false) {
    this.setState({open: true});
    nom.style.display = 'flex';
    nomarr.style.transform = 'rotate(90deg)';
  }

  else {
    this.setState({open: false});
    nom.style.display = 'none';
    nomarr.style.transform = 'rotate(-90deg)';
  }
}

nominatedMovie = (movie) => {

  if (this.state.nominated[0].imdbID === "empty") {
    this.setState({nominated: [movie]});
  }

  else {
    this.setState({nominated: [...this.state.nominated, movie]});

  }
}

deleteNom = (id) => {
  if (this.state.nominated.length === 1) {
    this.setState({nominated: [...this.state.nominated.filter(nom => nom.imdbID + nom.Year !== id),     {
      "Title": "Nominated Movies",
      "Year": "",
      "imdbID": "empty",
      "Type": "movie",
      "Poster": "https://www.kindpng.com/picc/m/381-3813740_film-award-trophy-png-transparent-png.png"
    } ]});
  }

  else {
    this.setState({nominated: this.state.nominated.filter(nom => nom.imdbID + nom.Year !== id)});
  }
}

  render() {
    return (
      <div className='Main'>
        <Nav inputHandler={this.inputHandler} searchMovies={this.searchMovies} />
        <Movies nominated={this.state.nominated} movies={this.state.movies} error={this.state.error} totalPages={this.state.totalPages} page={this.state.page} moviesMove={this.moviesMove} nominatedMovie={this.nominatedMovie} deleteNom={this.deleteNom} />
        <Nominated nominated={this.state.nominated} nominatedShow={this.nominatedShow} loggedIn={this.loggedIn} deleteNom={this.deleteNom} />
      </div>
    );
  }
}

export default App;
