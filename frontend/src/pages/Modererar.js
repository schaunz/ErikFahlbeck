import React from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Modererar from '../components/Modererar';

class Home extends React.Component {

    render() {
        return (
            <div>
                <Navbar/>
                <Modererar/>
                <Footer/>
            </div>
        );
    }
}

export default Home;