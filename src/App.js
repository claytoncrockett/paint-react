import React, { Component } from 'react';
import './App.css';
import Canvas from './components/Canvas';
import ColorPicker from './components/ColorPicker';
import Erase from './components/Erase';

class App extends Component {

  state = {paintColor: "#f44242", canvas: {}}

  changeColor = (hexColor) => {
    this.setState({paintColor: hexColor})
  }

  clearCanvas = (canvas) => {
    const context = this.state.canvas.getContext('2d');
    context.clearRect(0, 0, 1280, 1000);
  }

  passCanvas = (canvas) => {
    this.setState({canvas: canvas});
  }

  render() {
    return (
      <div className="App">
        <ColorPicker changeColor={this.changeColor} />
        <Canvas paintColor={this.state.paintColor} passCanvas={this.passCanvas} />
        {this.state.canvas && <Erase clearCanvas={() => this.clearCanvas(this.state.canvas)} /> }
      </div>
    );
  }
}

export default App;
