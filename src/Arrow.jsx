import React from 'react';
import { Link } from "react-router-dom";

export default class Arrow extends React.Component {
     render() {
          return (
               <div>
                    <i style={{ float: 'left', verticalAlign: 'middle' }} className="material-icons">
                         arrow_back_ios
                    </i> <Link to="/" className="text-danger">Volver</Link>
                    <hr/>
               </div>
          );
     }
}