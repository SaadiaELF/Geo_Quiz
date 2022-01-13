import { Link } from "react-router-dom";
import { Card, Form, Button, Col, Row} from "react-bootstrap";
import GQNavbar from "../../components/navbar/navbar";
import Hero from "../../components/hero/hero";
import "./SignUp.css";

function SignUp() {
    return (
        <header>
            <GQNavbar></GQNavbar>
            <Hero>
                <Card className="signup-card">
                    <Card.Header as="h5" className="text-start">Create new Account</Card.Header>
                    <Card.Body>
                        <Form className="text-center">
                            <Form.Group className="mb-3 text-start" controlId="username">
                                <Row>
                                    <Col md="4">
                                        <Form.Label>Username</Form.Label>
                                    </Col>
                                    <Col>
                                        <Form.Control type="text" placeholder="Username" autoComplete="username" />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group className="mb-3 text-start" >
                                <Row>
                                    <Col>
                                        <Form.Label>Email address</Form.Label>
                                    </Col>
                                    <Col>
                                        <Form.Control type="email" placeholder="Email" />
                                    </Col>
                                    <Col>
                                        <Form.Control type="email" placeholder="Confirm Email" />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group className="mb-3 text-start" >
                                <Row>
                                    <Col>
                                        <Form.Label>Password</Form.Label>
                                    </Col>
                                    <Col>
                                        <Form.Control type="password" placeholder="Password" autoComplete="new-password" />
                                    </Col>
                                    <Col>
                                        <Form.Control type="password" placeholder="Confirm Password" autoComplete="new-password" />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Text className="text-muted float-start">
                                Already have an account ? <Link to="/login">Sign in </Link>
                            </Form.Text>
                            <Button variant="primary" type="submit">
                                Sign Up
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Hero>
        </header>
    )
}

export default SignUp;