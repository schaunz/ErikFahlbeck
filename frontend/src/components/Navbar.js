import React from 'react';
import { Link } from '@reach/router';

class Navbar extends React.Component {
    render() {
        return(
            <div className="NavBar">
                <h2>This IS be the navbar</h2>
                <Link to='/'>Home</Link>
            </div>
        )
    }
}

export default Navbar;