import React from 'react';
import '../sass/footer.scss';
import { Link } from '@reach/router';

class Footer extends React.Component {

    render() {
        return(
            <div id="footer">
                <div class="container">
                    <div class="content">
                            <ul>
                                <li>
                                    Adress:
                                </li>
                                <li>
                                    Erik Fahlbeck
                                </li>
                                <li>
                                    Hågavägen 318
                                </li>
                                <li>
                                    752 63 Uppsala
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    Email: <a href='mailto:erik.fahlbeck@bahnhof.se'>erik.fahlbeck@bahnhof.se</a>
                                </li>
                                <li>
                                    Mobil: <a href='tel:0123123'>0730311140</a>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    Org. nr. 6303146275
                                </li>    
                                <li>
                                    Bg: 5446-1322
                                </li>
                            </ul>    
                    </div>
                </div>
            </div>
        )
    }

}

export default Footer;