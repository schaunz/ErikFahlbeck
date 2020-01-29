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
            posts: [],
            error: ''
        }
    }

    componentDidMount() {
        const wordpressSiteUrl = 'http://localhost:8888/wordpress/';
        this.setState( { loading: true }, () => {
            axios.get( `${wordpressSiteUrl}/wp-json/wp/v2/posts` )
            .then(res => {
                this.setState({loading: false, posts: res.data});
            }) 
            .catch( error => {
                this.setState({loading: false, error : error.response.data.message});
              });
        });
    }

    render() {
        const {loading, posts, error} = this.state;
        return (
            <div>
            <Navbar/>
            { error && <div className="alert">{error}</div> }
            { posts.length ? (
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
            ) : ''}
            { loading && <h1>Laddar...</h1> }
            </div>
        );
    }
}

export default Home;