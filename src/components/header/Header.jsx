import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicket } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expands="lg" className="navbar-parent">
            <Container fluid>
                <Navbar.Brand href="/" className="logo" style={{"color":'orange'}}>
                    <FontAwesomeIcon icon= {faTicket}/>CineRooster
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{maxHeight: '100px'}}
                        navbarScroll
                    >
                    </Nav>
                    <a href="https://github.com/restless-dev/CineRoosterFrontend" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} className="git-icon"/>
                    </a>                   
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
