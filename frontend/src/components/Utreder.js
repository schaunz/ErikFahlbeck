import React from 'react';
import '../sass/subpage.scss';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

class Utredning extends React.Component {

    render() {
        const {text} = this.props
        return(
            <div class="container">
                <div class="subpage">
                    <div class="content">
                        <h1>Utreder</h1>
                        <p>{ReactHtmlParser(text)}</p>
                    </div>
                </div>
            </div>
        )
    }

}

export default Utredning;