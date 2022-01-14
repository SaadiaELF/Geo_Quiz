import { Link } from "react-router-dom";
import { Card, Form, Button } from "react-bootstrap";
import GQNavbar from "../../components/navbar/navbar";
import Hero from "../../components/hero/hero";
import UserForm from "../../components/userForm/userForm";
import AuthService from "../../services/auth.service"
import "./Login.css";
import { useState } from "react";

function Login() {
    const [user, setUser] = useState({
        email: "",
        password: "",
        loading: false,
        message: ""
    });
    const onChangeEmail = (e) => {
        setUser({ ...user, email: e.target.value })
        console.log(user)
    }
    const onChangePassword = (e) => {
        setUser({ ...user, password: e.target.value })
    }
    const required = value => {
        if (!value) {
            return (
                <div className="alert alert-danger" role="alert">
                    This field is required!
                </div>
            );
        }
    };

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
                                onChange={onChangeEmail}
                            />
                            <UserForm
                                md="4"
                                col="2"
                                label="Password"
                                type="password"
                                placeholder="Password"
                                autocomplete="current-password"
                                onChange={onChangePassword}

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