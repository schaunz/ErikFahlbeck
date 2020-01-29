import React from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import renderHTML from 'react-render-html';

class SinglePost extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            loading: false,
            post: {},
            error: ''
        }
    }

    componentDidMount() {
        const wordpressSiteUrl = 'http://localhost:8888/wordpress/';
        this.setState( { loading: true }, () => {
            axios.get( `${wordpressSiteUrl}/wp-json/wp/v2/posts/${this.props.id}` )
            .then(res => {
                this.setState({loading: false, post: res.data});
            }) 
            .catch( error => {
                this.setState({loading: false, error : error.response.data.message});
              });
        });
    }

    render() {

        const { post, error, loading } = this.state; 

        return(
            <div>
                <Navbar/>
                { error && <div className="alert">{error}</div> }
                { Object.keys(post).length ? (
                    <div className='post-container'>
                        <div key={post.id}>
                            <div className="post-content">
                                {renderHTML(post.content.rendered)}
                            </div>
                        </div>
                    </div>
                ) : ''}
                { loading && <h1>Laddar...</h1> }
            </div>
        );
    }
}

export default SinglePost;