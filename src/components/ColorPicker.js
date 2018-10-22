import React from 'react';
import Menuicon from "../pictures/menuicon.png";
import styled from "styled-components";


const MenuIcon = () => <img src={Menuicon} alt="Menu Icon" width="100%" />

const IconContainer = styled.div`
  width: 4vw;
  position: absolute;
  top: 1%;
  left: 1%;
  background-color: grey;
`;

const AllColorsContainer = styled.div`
  width: 10vw;
  position: absolute;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  z-index: 2;
`;

const IndividualColorContainer = styled.div`
width: 4.5vw;
padding-top: 25%;
border: solid white;
border-radius: 1%;
`;

class ColorPicker extends React.Component{

  state = {choosingColor: false};

  chooseColor = () =>{
    this.setState({choosingColor: !this.state.choosingColor})
  }

  changeColor = (newColor) => {
    this.props.changeColor(newColor);
  }

  render(){
    return(
      <IconContainer >
      <div onClick={this.chooseColor}>
        <MenuIcon  />
      </div>
        {this.state.choosingColor && 
        <AllColorsContainer>
          <IndividualColorContainer style={{background: 'red' }} onClick={ () => this.changeColor('#f44141') }/>
          <IndividualColorContainer style={{background: 'blue' }} onClick={ () => this.changeColor('#4141f4') }/>
          <IndividualColorContainer style={{background: 'green' }} onClick={ () => this.changeColor('#41f455') }/>
          <IndividualColorContainer style={{background: 'yellow' }} onClick={ () => this.changeColor('#f1f441') }/>
          <IndividualColorContainer style={{background: 'purple' }} onClick={ () => this.changeColor('#d041f4') }/>
          <IndividualColorContainer style={{background: 'white' }} onClick={ () => this.changeColor('#ffffff') }/>
          <IndividualColorContainer style={{background: 'black' }} onClick={ () => this.changeColor('#000000') }/>
          <IndividualColorContainer style={{background: 'orange' }} onClick={ () => this.changeColor('#f48341') }/>
        </AllColorsContainer>
        }
      </IconContainer>
    )
  }
}

export default ColorPicker;