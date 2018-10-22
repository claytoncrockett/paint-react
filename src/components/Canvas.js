import React from "react";

class Canvas extends React.Component {

  state = { isPainting: false, userStrokeStyle: '#FF0000', line: [], prevPos:{offsetX: 0, offsetY: 0} };

  onMouseDown = ({nativeEvent}) => {
    const { offsetX, offsetY } = nativeEvent;
    this.setState({isPainting: true, prevPos: { offsetX, offsetY }});
  }

  onMouseMove = ({nativeEvent}) => {
    if(this.state.isPainting) {
      const { offsetX, offsetY } = nativeEvent;
      const offSetData = { offsetX, offsetY };
      const positionData = {
        start: { ...this.prevPos },
        stop: { ...offSetData },
      };
      this.setState({line: this.state.line.concat(positionData)});
      this.paint(this.state.prevPos, offSetData, this.state.userStrokeStyle)
    }
  }

  endPaintEvent = () => {
    if (this.state.isPainting){
      this.setState({isPainting: false});
    }
  }

  paint(prevPos, currPos, strokeStyle) {
    const {offsetX, offsetY} = currPos;
    const {offsetX: x, offsetY: y} = prevPos;

    this.ctx.beginPath();
    this.ctx.strokeStyle = strokeStyle;
    // Move the the prevPosition of the mouse
    this.ctx.moveTo(x, y);
    // Draw a line to the current position of the mouse
    this.ctx.lineTo(offsetX, offsetY);
    // Visualize the line using the strokeStyle
    this.ctx.stroke();
    this.setState({prevPos: {offsetX, offsetY }})
  }

  componentDidMount() {
    this.canvas.width = 1000;
    this.canvas.height = 800;
    this.ctx = this.canvas.getContext('2d');
    this.ctx.lineJoin = 'round';
    this.ctx.lineCap = 'round';
    this.ctx.lineWidth = 5;
  }

  render(){
    return(
      <canvas
      ref={(ref) => (this.canvas = ref)}
      style={{ background: 'black'}}
      onMouseDown={this.onMouseDown}
      onMouseLeave={this.endPaintEvent}
      onMouseUp={this.endPaintEvent}
      onMouseMove={this.onMouseMove}
      />
    )
  }

}

export default Canvas;
