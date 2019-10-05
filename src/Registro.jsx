import React from 'react';
import { Redirect, Switch } from "react-router-dom";
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
               pwdInput: 'box-shadow is-valid',
               token: '',
               user: '',
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

               return fetch(API + '/registro', {
                    method: 'POST',
                    headers: new Headers({ 'Content-Type': 'application/json' }),
                    body: JSON.stringify(user)
               })
                    .then(data => data.json())
                    .then(data => {
                         console.log(data);
                         if (data.ok == true) {
                              this.setState({
                                   token: data.data.token,
                                   user: data.data.user,
                                   redirect: true
                              });
                         } else {
                              console.log('Algo ha ido mal');
                         }

                         console.log('tot' + this.state.token, this.state.user, this.state.redirect);
                    })
                    .catch(err => console.log(err));

          } else {
               /* Añadir alerta en formulario... */
               this.setState = {
                    inputStyle: 'box-shadow is-invalid'
               }
          }
     }

     render() {
          if (this.state.redirect) {
               console.log('Redirigiendo...');
               return <Switch>
                    <Redirect
                         to={{
                              pathname: "/login",
                              state: { user: this.state.user }
                         }}
                    />
               </Switch>

          } else {
               console.log('Registro');
          }
          return (
               <div>
                    <Container style={{ width: '65%' }}>
                         <Arrow />
                         <Form onSubmit={this.handleSubmit}>
                              <Zoom delay={500}>
                                   <FormGroup>
                                        <Label className="txt-shadow text-white" for="username">Nombre de usuario
                                        </Label>
                                        <Input required autoComplete="foo" className="box-shadow" onChange={this.handleInputChange} type="text" name="username" id="username" placeholder="Nombre de usuario" />
                                   </FormGroup>
                              </Zoom>
                              <Zoom delay={1000}>
                                   <FormGroup>
                                        <Label className="txt-shadow text-white" for="exampleEmail">Email</Label>
                                        <Input required autoComplete="foo" onChange={this.handleInputChange} className="box-shadow" type="email" name="email" id="exampleEmail" placeholder="Email" />
                                   </FormGroup>
                              </Zoom>
                              <Zoom delay={1400}>
                                   <FormGroup>
                                        <Label className="txt-shadow text-white" for="examplePassword">Contraseña</Label>
                                        <Input required autoComplete="foo" onChange={this.handleInputChange} className={this.state.inputStyle} type="password" name="passwd" id="examplePassword" placeholder="Contraseña" />
                                   </FormGroup>
                              </Zoom>
                              <Zoom delay={1600}>
                                   <FormGroup>
                                        <Label className="txt-shadow text-white" for="checkPwd">Repite la contraseña</Label>
                                        <Input required autoComplete="foo" onChange={this.handleInputChange} className="box-shadow" type="password" name="passwdCheck" id="checkPwd" placeholder="Repite la contraseña" />
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