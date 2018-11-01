import React, { Component } from 'react';
import './App.css';
import { MovieContainer } from './components/movieContainer';

class App extends Component {
  render() {
    return (
      <div>
        <MovieContainer></MovieContainer>
      </div>
    );
  }
}

export default App;
