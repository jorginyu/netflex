import React from 'react';
{/**styles */}
import { Button } from 'reactstrap';

import { Link } from 'react-router-dom';
{/**effects */}
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Pulse from 'react-reveal/Pulse';

import N from './favicon-32x32.png';

export default class Home extends React.Component {
     constructor(props) {
          super(props);
          this.state = {
               token: 'null',
               displayed: 'none'
          }
     }
     render() {
          this.state.displayed = this.state.token === null ? 'none' : 'block';
          return (
               <div>
                    {/**show register and login button on a background */}
                    <Fade >
                         <div style={{display: this.state.displayed}} className="hero-image box-shadow txt-shadow">
                              <div className="hero-text">
                                   <Pulse  forever>
                                        <img className="box-shadow" id="title-icon" src={N} alt="Netflex icon"/>
                                   </Pulse >
                                   <Zoom>
                                        <h1 className="txt-shadow">Netflex</h1>
                                   </Zoom>
                                   <Zoom delay={500}>
                                        <p className="txt-shadow">Películas y series</p>
                                   </Zoom>
                                   <Zoom delay={1000}>
                                        <Link to="/registro" className="btn btn-outline-danger box-shadow">Regístrate</Link>  
                                        <br />
                                        <br />
                                        <Link id="loginLink" className="txt-shadow" to='/login' >¿Ya tienes una cuenta? Inicia sesión.</Link>
                                   </Zoom>

                              </div>
                         </div>
                    </Fade>
               </div>
          );
     }
}