import { Card, Form, Button, Col, Row } from "react-bootstrap";
import GQNavbar from "../../components/navbar/navbar";
import Hero from "../../components/hero/hero";
import "./Login.css";

function Login() {
    return (
        <header>
            <GQNavbar></GQNavbar>
            <Hero>
                <Card className="login-card">
                    <Card.Header as="h5" className="text-start">Sign in your account</Card.Header>

                    <Card.Body>
                        <Form className="text-center">

                            <Form.Group className="mb-3 text-start" controlId="email">
                                <Row>
                                    <Col md="4">
                                        <Form.Label>Email address</Form.Label>
                                    </Col>
                                    <Col>
                                        <Form.Control type="email" placeholder="Email" />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group className="mb-3 text-start" controlId="password">
                                <Row>
                                    <Col md="4">
                                        <Form.Label>Password</Form.Label>
                                    </Col>
                                    <Col>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Text className="text-muted float-start">
                                Don't have an account ? <span>Sign up </span>
                            </Form.Text>
                            <Button variant="primary" type="submit">
                                Sign In
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Hero>
        </header>
    )
}

export default Login;