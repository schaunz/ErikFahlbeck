import React from 'react';
import '../sass/footer.scss';
import { Link } from '@reach/router';

class Footer extends React.Component {

    render() {
        return(
            <div id="footer">
                <div class="container">
                    <div class="content">
                        <div class="col">Erik Fahlbeck</div>
                        <div class="col"><a href='mailto:erik.fahlbeck@bahnhof.se'>erik.fahlbeck@bahnhof.se</a></div>
                        <div class="col"><a href='tel:0123123'>123123123</a></div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Footer;