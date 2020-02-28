import React from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

class Home extends React.Component {

    render() {
        return (
            <div>
                <Navbar/>
                <Footer/>
            </div>
        );
    }
}

export default Home;