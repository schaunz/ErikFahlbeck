import React from 'react';
import '../sass/boxes.scss';
import Box from './Box';
import SLU from '../img/SLU.jpg';
import tryg from '../img/tryg.jpg';
import forelasning from '../img/forelasning.jpg';

class Boxes extends React.Component {

    render() {
        return(
            <div class="boxes">
                <div class="container">
                    <div class="content">
                        <Box title='Analyserar' image={forelasning} link='/anayserar' />
                        <Box title='Utreder' image={SLU} link='/utreder' />
                        <Box title='Modererar' image={tryg} link='/modererar' />
                    </div>
                </div>
            </div>
        )
    }

}

export default Boxes;