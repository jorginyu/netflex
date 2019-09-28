import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {Container} from 'reactstrap';
//components:
import Navigator from './Navigator';
import Footer from './Footer';

export default () => (
  <div>
    <Navigator />
    <Footer />
  </div>
);
