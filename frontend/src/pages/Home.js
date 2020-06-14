import React from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Presentation from '../components/Presentation';
import Boxes from '../components/Boxes';
import Footer from '../components/Footer';

class Home extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            loading: false,
            page: [],
            error: ''
        }
    }

    componentDidMount() {
        const wordpressSiteUrl = 'https://admin.efutredningar.se/';
        this.setState( { loading: true }, () => {
            axios.get( `${wordpressSiteUrl}/wp-json/wp/v2/pages/7` )
            .then(res => {
                this.setState({loading: false, startpage: res.data});
            })
            .catch( error => {
                this.setState({loading: false, error : error.response.data.message});
              });
        });
    }

    render() {
        const {loading, startpage, error} = this.state;
        if(startpage) {
            const {presentation} = startpage.acf;
            console.log(presentation);
            
            return (
                <div>
                    <Navbar/>
                    <Presentation presentation={presentation} />
                    <Boxes/>
                    <Footer/>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }
}

export default Home;