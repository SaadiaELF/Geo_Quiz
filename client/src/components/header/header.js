import { Navbar, Nav, Image, Container } from "react-bootstrap";
import "./header.css";
import icon from "../../assets/geography.png";

function Header() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container >
                    <Nav.Item><Image id="icon" src={icon}></Image></Nav.Item>
                    <Navbar.Brand href="/">GeoQuiz</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="justify-content-center" id="responsive-navbar-nav">
                        <Nav>
                            {/* <Nav.Link href="">Dashboard</Nav.Link>
                            <Nav.Link href="">Login</Nav.Link>
                            <Nav.Link href="">SignUp</Nav.Link>
                            <Nav.Link href="">LogOut</Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;