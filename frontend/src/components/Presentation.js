import React from 'react';
import '../sass/presentation.scss';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

class Presentation extends React.Component {

    render() {
        const {presentation} = this.props;
        return(
            <div class="presentation">
                <div class="container">
                    <div class="content">
                        <p>
                        {ReactHtmlParser(presentation)}
                        </p>
                    </div>
                </div>
            </div>
        )
    }

}

export default Presentation;