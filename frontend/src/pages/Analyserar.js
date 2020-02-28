import React from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Analyserar from '../components/Analyserar';

class Home extends React.Component {

    render() {
        return (
            <div>
                <Navbar/>
                <Analyserar/>
                <Footer/>
            </div>
        );
    }
}

export default Home;