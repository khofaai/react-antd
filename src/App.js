import React, { Component } from 'react';
import './App.css';
import RouterView from './router';
import { BrowserRouter } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <RouterView></RouterView>
      </BrowserRouter>
    );
  }
}

export default App;
