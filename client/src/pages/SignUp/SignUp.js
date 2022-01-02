import { Card, Form, Button, Col, Row } from "react-bootstrap";
import GQNavbar from "../../components/navbar/navbar";
import Hero from "../../components/hero/hero";
import "./SignUp.css";

function SignUp() {
    return (
        <header>
            <GQNavbar></GQNavbar>
            <Hero>
                <Card className="signup-card">
                    <Card.Body>
                        <Form className="text-center">
                            <Form.Group className="mb-3 text-start" controlId="username">
                                <Row>
                                    <Col md="4">
                                        <Form.Label>Username</Form.Label>
                                    </Col>
                                    <Col>
                                        <Form.Control type="text" placeholder="Username" />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group className="mb-3 text-start" controlId="email">
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
                            <Form.Group className="mb-3 text-start" controlId="password">
                                <Row>
                                    <Col>
                                        <Form.Label>Password</Form.Label>
                                    </Col>
                                    <Col>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Col>
                                    <Col>
                                        <Form.Control type="password" placeholder="Confirm Password" />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Hero>
        </header>
    )
}

export default SignUp;