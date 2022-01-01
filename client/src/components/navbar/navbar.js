import { Navbar, Nav, Image, Container } from "react-bootstrap";
import "./navbar.css";
import icon from "../../assets/geography.png";

function GQNavbar() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark">
                <Container>
                    <Nav.Item><Image id="icon" src={icon}></Image></Nav.Item>
                    <Navbar.Brand id="brand" href="/">GeoQuiz</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                        <Nav>
                            <Nav.Link className="link" href="">Home</Nav.Link>
                            <Nav.Link className="link" href="">Dashboard</Nav.Link>
                            <Nav.Link className="link" >Log In</Nav.Link>
                            <Nav.Link className="link" >Sign Up</Nav.Link>
                            <Nav.Link className="link" >Log Out</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default GQNavbar;