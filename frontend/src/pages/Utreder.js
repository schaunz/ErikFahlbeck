import React from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Utreder from '../components/Utreder';

class Home extends React.Component {

    render() {
        return (
            <div>
                <Navbar/>
                <Utreder/>
                <Footer/>
            </div>
        );
    }
}

export default Home;