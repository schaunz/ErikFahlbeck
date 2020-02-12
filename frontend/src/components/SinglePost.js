import React from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import renderHTML from 'react-render-html';

class SinglePost extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            loading: false,
            posts: [],
            error: ''
        }
    }

    componentDidMount() {
        // const wordpressSiteUrl = 'http://localhost:8888/wordpress/';
        const wordpressSiteUrl = 'http://ec2-18-191-148-24.us-east-2.compute.amazonaws.com/';
        this.setState( { loading: true }, () => {
            // axios.get( `${wordpressSiteUrl}/wp/v2/posts/${this.props.id}` )
            axios.get( `${wordpressSiteUrl}wp-json/wp/v2/posts` )
            .then(res => {
                this.setState({loading: false, post: res.data});
                console.log(res.data);
            }) 
            .catch( error => {
                this.setState({loading: false, error : error.response.data.message});
              });
        });
    }

    render() {

        const { posts, error, loading } = this.state; 

        // console.log(posts);

        return(
            <div>
                {/* <Navbar/>
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
                { loading && <h1>Laddar...</h1> } */}
            </div>
        );
    }
}

export default SinglePost;