import React from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import Navbar from './Navbar';
import renderHTML from 'react-render-html';

class Avhandlingar extends React.Component {

    render() {
        return(
            <div>
                <Navbar />
                <h1>Avhandlingar</h1>
            </div>
            
        );
    }
}

export default Avhandlingar;