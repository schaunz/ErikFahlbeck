import React from 'react';
import { Link } from '@reach/router';
import CV from '../pdf/CV.pdf';

class Navbar extends React.Component {
    render() {
        return(
            <div className="NavBar">
                <div className="container">
                    <div className="logo col-sm-4">
                        <Link to='/'>
                            <h1>E.F. Utredningar</h1>
                        </Link>
                    </div>
                    <div className="menu col-sm-8">
                        <Link to="/analyserar">
                            <h2>Analyserar</h2>
                        </Link>
                        <Link to="/utreder">
                            <h2>Utreder</h2>
                        </Link>
                        <Link to="/modererar">
                            <h2>Modererar</h2>
                        </Link>
                        <a href={CV} target="_blank">
                            <h2>CV</h2>
                        </a>
                        <a href="#footer">
                            <h2>Kontakt</h2>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;