import React from 'react';
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
//styles
import {
  Nav, Container, Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge
} from 'reactstrap';
//components
import Home from './Home';
import Movies from './Movies';
import Tv from './Tv';

import N from './favicon.jpg';

export default class Navigator extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <BrowserRouter>
        <Navbar light expand="md">
          <NavbarBrand href="/">
            <img id="nav-icono" src={N} alt="Logo" />
          </NavbarBrand>
          <Badge color="danger">Netflex</Badge>
          <NavbarToggler id="toggler" onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem className="p-3">
                  <Link className="link nav-link" to="/">Inicio</Link>
                </NavItem>
                <NavItem className="p-3">
                  <Link className="link nav-link" to="/movies">Películas</Link>
                </NavItem>
                <NavItem className="p-3">
                  <Link className="link nav-link" to="/tv">Series y Tv</Link>
                </NavItem>

            </Nav>
          </Collapse>
        </Navbar>


        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movies" component={Movies} />
          <Route path="/tv" component={Tv} />
        </Switch>

      </BrowserRouter>
    );
  }
}