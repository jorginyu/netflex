import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

export default class Home extends React.Component {
     render() {
          return (
               <div>
                    <Fade>
                         <div className="hero-image">
                              <div className="hero-text">
                                   <Zoom >
                                        <h1>Netflex</h1>
                                   </Zoom>
                                   <Zoom delay={500}>
                                        <p>Películas y series</p>
                                   </Zoom>
                                   <Zoom delay={1000}>
                                        <Link to="/registro" className="btn btn-outline-danger">Regístrate</Link>  
                                        <br />
                                        <br />
                                        <Link id="loginLink" to='/login' >¿Ya tienes una cuenta? Inicia sesión.</Link>
                                   </Zoom>

                              </div>
                         </div>
                    </Fade>
               </div>
          );
     }
}