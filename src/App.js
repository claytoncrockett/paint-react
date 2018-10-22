import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Canvas from './components/Canvas';
import ColorPicker from './components/ColorPicker';

class App extends Component {

  state = {paintColor: "#f44242"}

  changeColor = (hexColor) => {
    this.setState({paintColor: hexColor})
  }

  render() {
    return (
      <div className="App">
        <ColorPicker changeColor={this.changeColor} />
        <Canvas paintColor={this.state.paintColor} />
      </div>
    );
  }
}

export default App;
