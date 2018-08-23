import React, { Component } from "react";
import styled, { ThemeProvider } from 'styled-components';
import Card from '../components/card';
import {theme1,theme2} from '../colors';

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const TitleLight = Title.extend`
  font-weight: normal;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Button = styled.button`
  border-radius: 3px;
  padding: 10px;
  border: none;
  font-size: 20px;
  background-color: ${props => props.primary ? theme1.primaryC : 'white'};
  color: ${props => props.primary ? 'white' : theme1.primaryC};
`;


const themeProduct1 = theme1;

const themeProduct2 = theme2;

class Home extends Component {
  render(){
    return(
        <Wrapper>
          <Title>
            This is my styled component!
          </Title>
          <TitleLight>
            This is a light version
          </TitleLight>
          <form action="/" method="post">
          <Button>This is a normal button</Button>
          <Button primary>This is a primary button</Button>
          </form>
          <Card color="red">Hello this is a default theme</Card>
          <ThemeProvider theme={themeProduct1}>
            <Card>Hello this is a theme from product 1</Card>
          </ThemeProvider>
          <ThemeProvider theme={themeProduct2}>
            <Card>Hello this is a theme from product 2</Card>
          </ThemeProvider>
        </Wrapper>
    )
  }
}

export default Home;
