import React from 'react';
import { Redirect } from "react-router-dom";
import Arrow from './Arrow';
import { Container, Button, Form, FormGroup, Label, Input, FormText, FormFeedback } from 'reactstrap';

import Zoom from 'react-reveal/Zoom';

const API = 'http://localhost:8080';

export default class Login extends React.Component {
     constructor(props) {
          super(props);
          this.state = {
               username: '',
               email: '',
               passwd: '',
               passwdCheck: '',
               token: '',
               redirect: false
          };
          this.handleInputChange = this.handleInputChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
     }

     handleInputChange(event) {
          const target = event.target;
          let value = target.value;
          const name = target.name;
          this.setState({
               [name]: value
          });
     }

     handleSubmit(event) {
          event.preventDefault();
          console.log('Registrando...');
          if (this.state.passwd === this.state.passwdCheck) {
               let user = {
                    username: this.state.username,
                    email: this.state.email,
                    passwd: this.state.passwd
               }

               fetch(API + '/registro', {
                    method: 'POST',
                    headers: new Headers({ 'Content-Type': 'application/json' }),
                    body: JSON.stringify(user)
               })
                    .then(data => data.json())
                    .then(data => {
                         console.log(data);
                         this.setState = {
                           token: data,
                           redirect: true
                         };
                    })
                    .catch(err => console.log(err));

          } else {
               /* Añadir alerta en formulario... */
               return console.log('jola');
          }
     }

     render() {
          if(this.state.redirect === true) {
               <Redirect to="/login" />
          } else {
               console.log('Registro');
          }
          return (
               <div>
                    <Container style={{ width: '65%' }}>
                         <Arrow />
                         <hr />
                         <Form onSubmit={this.handleSubmit}>
                              <Zoom delay={500}>
                                   <FormGroup>
                                        <Label className="txt-shadow text-white" for="username">Nombre de usuario
                                        </Label>
                                        <Input className="box-shadow" onChange={this.handleInputChange} type="text" name="username" id="username" placeholder="Nombre de usuario" />
                                        <FormFeedback>You will not be able to see this</FormFeedback>
                                   </FormGroup>
                              </Zoom>
                              <Zoom delay={1000}>
                                   <FormGroup>
                                        <Label className="txt-shadow text-white" for="exampleEmail">Email</Label>
                                        <Input onChange={this.handleInputChange} className="box-shadow" type="email" name="email" id="exampleEmail" placeholder="Email" />
                                   </FormGroup>
                              </Zoom>
                              <Zoom delay={1400}>
                                   <FormGroup>
                                        <Label className="txt-shadow text-white" for="examplePassword">Contraseña</Label>
                                        <Input onChange={this.handleInputChange} className="box-shadow" type="password" name="passwd" id="examplePassword" placeholder="Contraseña" />
                                   </FormGroup>
                              </Zoom>
                              <Zoom delay={1600}>
                                   <FormGroup>
                                        <Label className="txt-shadow text-white" for="checkPwd">Repite la contraseña</Label>
                                        <Input onChange={this.handleInputChange} className="box-shadow" type="password" name="passwdCheck" id="checkPwd" placeholder="Repite la contraseña" />
                                   </FormGroup>
                              </Zoom>
                              <Zoom delay={1750}>
                                   <FormGroup check>
                                        <Label check className="txt-shadow text-white">
                                             <Input required className="box-shadow" type="checkbox" />
                                             Acepto las normas y políticas.
                                   </Label>
                                   </FormGroup>
                              </Zoom>
                              <Zoom delay={2000}>
                                   <Button style={{ backgroundColor: 'transparent' }} className="btn-outline-danger mt-5" block>Registrarse</Button>
                              </Zoom>
                         </Form>
                    </Container>
               </div>
          );
     }
}