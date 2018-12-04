import React, { Component } from 'react';
import './App.css';

class App extends Component {

  data = [' Windy', ' Kurniawan']



  render() {
    return (
      <div className="App">
        <h1>Nama : {this.data[0]}</h1>
      </div>
    );
  }
}

export default App;
