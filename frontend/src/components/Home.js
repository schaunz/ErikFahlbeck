import React from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import Navbar from './Navbar';
import renderHTML from 'react-render-html';

class Home extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            loading: false,
            startpage: {},
            error: ''
        }
    }

    componentDidMount() {
        const wordpressSiteUrl = 'http://ec2-18-191-148-24.us-east-2.compute.amazonaws.com/';
        this.setState( { loading: true }, () => {
            axios.get( `${wordpressSiteUrl}/wp-json/wp/v2/pages/11` )
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
        const ACF = startpage.ACF;
        console.log(startpage);
        console.log(ACF);
        return (
            <div>
            <Navbar/>
            { error && <div className="alert">{error}</div> }
            {  Object.keys(startpage).length ? (
                <h1>{ACF.header}</h1>
            ) : ''}
            {/* { posts.length ? (
                <div className='post-container'>
                    {posts.map( post => (
                        <div key={post.id}>
                            <Link to={`/post/${post.id}`}>
                                {post.title.rendered}
                            </Link>
                            <div className="post-content">
                                {renderHTML(post.content.rendered)}
                            </div>
                            <Link to={`/post/${post.id}`} className="readmore">Visit post</Link>
                        </div>
                    ) )}
                </div>
            ) : ''} */}
            { loading && <h1>Laddar...</h1> }
            </div>
        );
    }
}

export default Home;