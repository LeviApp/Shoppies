import React, { Component } from 'react';
// import {BrowserRouter as Router,Route, NavLink, Redirect} from 'react-router-dom';
import '../SASS/App.sass';
import Nav from './Nav'
import Movies from './Movies'
import Nominated from './Nominated'

import axios from 'axios'
import { withAuth0 } from '@auth0/auth0-react';

class App extends Component {
  
  constructor (props) {
    super(props);

    this.state = {
      userIDENT: "",
      search: '',
      movies: [],
      error: false,
      page: 1,
      totalPages: 0,
      nominated: [],
      open: false,
      sMovie: {}
  }
  }

  

  
  componentDidMount() {
    const { user } = this.props.auth0;
    this.movieReload(this.state.userIDENT)
    // let val = localStorage.getItem('nominatedMovies')
    // let congrats = document.getElementsByClassName('modal')[0]
    // if (val === null) {
    //   this.setState({nominated: [{
    //     "Title": "Nominated Movies",
    //     "Year": "",
    //     "imdbID": "empty",
    //     "Type": "movie",
    //     "Poster": "https://www.kindpng.com/picc/m/381-3813740_film-award-trophy-png-transparent-png.png"
    //   }]})
    // }
    // else {
    //   this.state.nominated = JSON.parse(val)

    //   if (JSON.parse(val).length === 5) {
    //     congrats.style.visibility = 'visible'
    //   }
    // }
  }

  componentWillUnmount() {

  }

  // componentDidUpdate(newProps, newState) {
  //   console.log('this did update', newProps, newState['nominated'].length, this.state.nominated.length)
  // }

  // componentWillUpdate(prevProps, prevState) {
  //   // console.log('this will update', prevProps, prevState['nominated'].length, this.state.nominated.length)
  // }


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

searchMoviesEnter = (event) => {
  event.persist()
  if (event.keyCode === 13) {
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

nominatedShow = (val) => {
  let nom = document.getElementsByClassName('nominated')[0]
  let nomarr = document.getElementsByClassName('nominatedarrow')[0]
  if (this.state.userIDENT === '') {
    this.setState({userIDENT: val})
    this.movieReload(val)
  }
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

nominatedMovie = (movie, val) => {
  let savedMovie = movie;
  savedMovie['userID'] = val
axios.post('https://shopify-shoppies.herokuapp.com/shoppies/api/awards/', savedMovie, {headers: {
    userID: val}})
  .then(function (response) {
  })
  .then(res =>  this.movieReload(this.state.userIDENT))
  .catch(function (error) {
    console.log(error);
  });
 

// if (this.state.nominated[0].imdbID === "empty") {
//   this.setState({nominated: [movie]});
//   window.localStorage.setItem('nominatedMovies', JSON.stringify([movie]));

// }

// else {
//   let congrats = document.getElementsByClassName('modal')[0]

//   this.setState({nominated: [...this.state.nominated, movie]});
//   window.localStorage.setItem('nominatedMovies', JSON.stringify([...this.state.nominated, movie]));
//   if ([...this.state.nominated, movie].length === 5) {
//       congrats.style.visibility = 'visible'
//   }
// }
}


deleteNom = (id, mos) => {
  let vidID = id;

  if (typeof vidID === 'string') {
    let mosOne = mos.filter(mo => mo.imdbID === id)
    vidID = mosOne[0].id;
  }
  axios.delete(`https://shopify-shoppies.herokuapp.com/shoppies/api/awards/${vidID}`)
  .then(response => {
     this.movieReload(this.state.userIDENT)
  })
  .catch(err => console.log(err))
}

movieReload = (val) => {
  let congrats = document.getElementsByClassName('modal')[0]
  axios.get('https://shopify-shoppies.herokuapp.com/shoppies/api/awards/', {
    headers: {
      userID: val
    }
   }).then(response => {
     if (response.data.length >=1) {
      this.setState({nominated: response.data});
     }

     else {
      this.setState({nominated: [{
        "Title": "Nominated Movies",
        "Year": "",
        "imdbID": "empty",
        "Type": "movie",
        "Poster": "https://www.kindpng.com/picc/m/381-3813740_film-award-trophy-png-transparent-png.png"
      }]});

     }})
     .then(res => {
      if (this.state.nominated.length === 5) {
        congrats.style.visibility = 'visible'
    }
      else {
        congrats.style.visibility = 'hidden'

      }
     }).catch(err => console.log('There is a Quote Error', err))
 }

  render() {
    return (
      <div className='Main'>
        <Nav inputHandler={this.inputHandler} searchMovies={this.searchMovies} searchMoviesEnter={this.searchMoviesEnter} />
        <Movies nominated={this.state.nominated} movies={this.state.movies} error={this.state.error} totalPages={this.state.totalPages} page={this.state.page} moviesMove={this.moviesMove} nominatedMovie={this.nominatedMovie} deleteNom={this.deleteNom} />
        <Nominated nominated={this.state.nominated} nominatedShow={this.nominatedShow} loggedIn={this.loggedIn} deleteNom={this.deleteNom} />
      </div>
    );
  }
}

export default withAuth0(App);;
