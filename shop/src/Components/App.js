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
      search: '',
      movies: [
       
      ],
      error: false,
      page: 1,
      totalPages: 0
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

  render() {
    return (
      <div className='Main'>
        <Nav inputHandler={this.inputHandler} searchMovies={this.searchMovies} />
        <Movies movies={this.state.movies} error={this.state.error} totalPages={this.state.totalPages} page={this.state.page} />
      </div>
    );
  }
}

export default App;
