import React from 'react';
import { Link } from '@reach/router';

class Navbar extends React.Component {
    render() {
        return(
            <div className="NavBar">
                <Link to='/'>Home</Link>
                <Link to='/avhandlingar'>Avhandlingar</Link>
            </div>
        )
    }
}

export default Navbar;