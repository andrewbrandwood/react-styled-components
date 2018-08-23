import styled from 'styled-components';
import React, { Component } from 'react';
import {lighten} from 'polished';

const CCard = styled.div`
  color: #000;
  background-color: ${props => props.color ? props.color : lighten(.5, props.theme.primaryC)};
  padding: 20px;
`;


class Card extends Component {
  render(){
    return (
        <CCard color={this.props.color}>{this.props.children} {this.props.color}</CCard>
    )
  }
}

export default Card
