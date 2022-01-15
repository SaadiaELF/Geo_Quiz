import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, Form, Button, Alert } from "react-bootstrap";
import GQNavbar from "../../components/navbar/navbar";
import Hero from "../../components/hero/hero";
import UserForm from "../../components/userForm/userForm";
import AuthService from "../../services/auth.service";
import "./Login.css";

function Login() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: "",
        message: ""
    });
    
    const onChangeEmail = (e) => {
        setUser({ ...user, email: e.target.value })
        console.log(user)
    }

    const onChangePassword = (e) => {
        setUser({ ...user, password: e.target.value })
    }

    const handleLogin = (e) => {
        e.preventDefault();
        AuthService.login(user.email, user.password).then(
            () => {
                navigate("/dashboard");
                window.location.reload();
            },
            error => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setUser({ ...user, message: resMessage });
            }

        );
    }

    return (
        <header>
            <GQNavbar></GQNavbar>
            <Hero>
                <Card className="login-card">
                    <Card.Header as="h5" className="text-start">Sign in your account</Card.Header>
                    <Card.Body>
                        <Form className="text-center" onSubmit={handleLogin}>
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
                               {user.message && (
                                <Alert variant="danger">
                                    {user.message}
                                </Alert>
                            )}
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