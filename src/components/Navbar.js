import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-primary mb-3">
                    <div className="container">
                        <Link to="/">WikiCountries</Link>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
