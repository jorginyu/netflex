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
import { Form, Input } from 'reactstrap';

import Fade from 'react-reveal/Fade';

//components
import Home from './Home';
import Movies from './Movies';
import Tv from './Tv';
import Registro from './Registro';
import Login from './Login';

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
          <Fade>
            <NavbarBrand to="/">
              <img className="box-shadow" id="nav-icono" src={N} alt="Logo" />
            </NavbarBrand>
            <Badge className="box-shadow" color="danger">Netflex</Badge>
          </Fade>
          <NavbarToggler id="toggler" onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="p-3">
                <Link className="link nav-link txt-shadow" to="/">Inicio</Link>
              </NavItem>
              <NavItem className="p-3">
                <Link className="link nav-link txt-shadow" to="/movies">Películas</Link>
              </NavItem>
              <NavItem className="p-3">
                <Link className="link nav-link txt-shadow" to="/tv">Series y Tv</Link>
              </NavItem>
              <NavItem>
                <Form>
                  <Input className="box-shadow" id="mysearch" placeholder="Buscar" />
                </Form>
              </NavItem>

            </Nav>
          </Collapse>
        </Navbar>


        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movies" component={Movies} />
          <Route path="/tv" component={Tv} />
          <Route path="/login" component={Login} />
          <Route path="/registro" component={Registro} />
        </Switch>

      </BrowserRouter>
    );
  }
}