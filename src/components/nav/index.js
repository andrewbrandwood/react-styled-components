import React, {Component} from 'react';
import styled from 'styled-components';
import { Route, NavLink, BrowserRouter } from "react-router-dom";
import Home from "../../views/home";
import Colours from "../../views/colours";

const StyledLink = styled(NavLink)`
  &.active { color: red; }
`

class Nav extends Component {
    render(){
    return(
      <BrowserRouter>
        <div>
          <ul className="header">
            <li><StyledLink exact={true} to="/">Home</StyledLink></li>
            <li><StyledLink to="/colours">Colours</StyledLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/colours" component={Colours}/>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default Nav;
