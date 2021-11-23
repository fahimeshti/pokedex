import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AppNavigator = () => {
    return (
    <div>
        <Navbar fixed="top" bg="dark" variant="dark">
            <Container>
              <Link to={"/"}>
                <Navbar.Brand>Pokedex</Navbar.Brand>
              </Link>
            </Container>
        </Navbar>
    </div>
    );
};

export default AppNavigator;