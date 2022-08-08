import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';







const Header = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);


    useEffect(() => {


        const onScroll = () => {

            if(window.scrollY > 50){

                setScrolled(true);
            } else {

                setScrolled(false);
            }
        }


        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    })

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }




    return (
        <>
            <Navbar bg="light" expand="lg" className={scrolled? 'scrolled' : ''}>
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} alt="Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>

                            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>

                            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                        </Nav>

                        <Navbar.Text>
                            <div className="social-icon">
                                <a href="#login"><img src={navIcon1} alt="" /></a>
                                <a href="#login"><img src={navIcon2} alt="" /></a>
                                <a href="#login"><img src={navIcon3} alt="" /></a>
                            </div>
                            <button onClick={() => console.log('connects')}>Let's connect</button>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;