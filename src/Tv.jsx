import React from 'react';
import Arrow from './Arrow';
import { Container } from 'reactstrap';


export default class Tv extends React.Component {
     render() {
          return (
               <div>
                    <Container>
                         <Arrow />
                    </Container>
               </div>
          );
     }
}