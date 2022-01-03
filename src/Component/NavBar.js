    import React from 'react'
    import {Navbar , Nav, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom'
    function NavBar({login,setLogin}) {
        const toggle = ()=> setLogin(!login)
        return (
            <div>
                {login ? <Navbar bg="light" expand="lg">
    <Container>
        <Navbar.Brand >React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
           {/* <Link to="/"><Nav.Link >Home</Nav.Link></Link>  */}
            <Nav.Link as={Link} to='/' >Home</Nav.Link>
            <Nav.Link as={Link} to='/Profiles'>Profiles</Nav.Link>
            <Nav.Link as={Link} onClick={toggle} to='/Login'>logout</Nav.Link>
        </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar> : <Navbar bg="light" expand="lg">
    <Container>
        <Navbar.Brand >React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
           {/* <Link to="/"><Nav.Link >Home</Nav.Link></Link>  */}
            <Nav.Link as={Link} to='/' >Home</Nav.Link>
            <Nav.Link as={Link} onClick={toggle} to='/Login'>Login</Nav.Link>
        </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>}
                
            </div>
        )
    }

    export default NavBar
