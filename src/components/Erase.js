import React from 'react';
import Trashcan from '../pictures/Trashcan.png';
import styled from "styled-components";


const TrashCan = () => <img src={Trashcan} alt="Erase Work" width="100%" />

const IconContainer = styled.div`
  width: 4vw;
  position: absolute;
  top: 1%;
  right: 1%;
  background-color: grey;
  cursor: pointer;
`;


class Erase extends React.Component{

  render(){
    return(
      <IconContainer onClick={this.props.clearCanvas}>
        <TrashCan />
      </IconContainer>
    )
  }
  
}

export default Erase;