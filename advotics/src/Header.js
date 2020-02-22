import React from 'react';
import {Nav,Navbar} from 'react-bootstrap';
import profile from './Profile.svg';
import logout from './logout@2x.png';
import advotics from './advotics.png';
import './App.css';

class Header extends React.Component {
    render(){
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/"><img class="logo-advotics" src={advotics} /> <span><p className="text-navbar">powered by</p></span> <img class="logo-advotics-small" src={advotics} /></Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav"> 
                    <Nav className="ml-auto">
                        <Nav.Item className="username">Username</Nav.Item> 
                        <Nav.Item className="company">Company Name</Nav.Item>
                        <Nav.Item><img src={profile} className="profile"/></Nav.Item>
                        <Nav.Item><img src={logout} className="logout"/></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
        }
}

export default Header;
