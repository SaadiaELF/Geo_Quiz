import { Link } from "react-router-dom";
import { Card, Form, Button, Col, Row } from "react-bootstrap";
import GQNavbar from "../../components/navbar/navbar";
import Hero from "../../components/hero/hero";
import UserForm from "../../components/userForm/userForm";
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
                            <UserForm
                                md="4"
                                col="2"
                                label="Email address"
                                type="email"
                                placeholder="Email"
                                autocomplete="current-email"
                            />
                            <UserForm
                                md="4"
                                col="2"
                                label="Password"
                                type="password"
                                placeholder="Password"
                                autocomplete="current-password"
                            />
                            <Form.Text className="text-muted float-start">
                                Don't have an account ? <Link to="/signup">Sign up </Link>
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