import React from 'react';
import { 
    Navbar,
    Nav
} from 'react-bootstrap';
import './index.css'

class Header extends React.Component {
    render() {
        return (
            <Navbar className="bg-green-600 shadow-md" variant="dark" expand="lg">
                <Navbar.Brand href="/" className="flex items-center">
                    {/* // Logo dan Nama Aplikasi */}
                    <img src={require('../../assets/images/logo.png')} height="30" alt="logo" className="mr-3"/>
                    <span className="font-bold text-xl">Trip Planner</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        {/* // Link Navigasi */}
                        <Nav.Link href="/" className="flex items-center text-white hover:text-gray-200">
                            <i className="fas fa-home mr-2"></i> 
                            <span>Home</span>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Header;