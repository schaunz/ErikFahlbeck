import React from 'react';
import '../sass/box.scss';
import { Link } from '@reach/router';

class Box extends React.Component {
    render() {
        const title = this.props.title;
        const img = this.props.image;
        const link = this.props.link;
        return(
            <Link to={link}>
                <div class="box">
                    <h1>{title}</h1>
                    <div class="image" style={{backgroundImage: 'url(' + img + ')'}}></div>
                </div>
            </Link>
        )
    }

}

export default Box;