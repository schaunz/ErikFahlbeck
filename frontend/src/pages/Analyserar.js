import React from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Analyserar from '../components/Analyserar';

class Home extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            loading: false,
            error: ''
        }
    }

    componentDidMount() {
        const wordpressSiteUrl = 'https://admin.efutredningar.se/';
        this.setState( { loading: true, page: '' }, () => {
            axios.get( `${wordpressSiteUrl}/wp-json/wp/v2/pages/14` )
            .then(res => {
                this.setState({loading: false, page: res.data});
            })
            .catch( error => {
                this.setState({loading: false, error : error.response.data.message});
              });
        });
    }

    render() {
        
        const {loading, page, error} = this.state;
        
        if(page) {
            const {text} = page.acf;
            return (
                <div>
                    <Navbar/>
                    <Analyserar text={text} />
                    <Footer/>
                </div>
            );
        } else {
            return (
                <div></div>
            )
        }        
    }
}

export default Home;