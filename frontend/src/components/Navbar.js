import React from 'react';
import { Link } from '@reach/router';

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
                        <Link to="/">
                            <h2>Analyserar</h2>
                        </Link>
                        <Link to="/">
                            <h2>Utreder</h2>
                        </Link>
                        <Link to="/">
                            <h2>Modererar</h2>
                        </Link>
                        <Link to="/">
                            <h2>CV</h2>
                        </Link>
                        <Link to="#footer">
                            <h2>Kontakt</h2>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;