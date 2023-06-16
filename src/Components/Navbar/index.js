import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';


function Navi() {
    return (
        <>

    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
            <Navbar.Brand href="#home">Sparkle</Navbar.Brand>
            <Nav fill variant="pills" >
                <Nav.Link as={NavLink} to="/" exact>Home</Nav.Link>
                <Nav.Link as={NavLink} to="/st" exact>Start a Speech</Nav.Link>
                <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>

            </Nav>
            <Form className="d-flex">
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
            </Form>
        </Container>
    </Navbar>

    <br />

    </>
    );
}

export default Navi;