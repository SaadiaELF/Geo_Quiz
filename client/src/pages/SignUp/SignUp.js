import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Form, Button } from "react-bootstrap";
import GQNavbar from "../../components/navbar/navbar";
import Hero from "../../components/hero/hero";
import AuthService from "../../services/auth.service";
import UserForm from "../../components/userForm/userForm";
import "./SignUp.css";

function SignUp() {
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        message: ""
    });
    const onChangeUsername = (e) => {
        setUser({ ...user, username: e.target.value })
    }
    const onChangeEmail = (e) => {
        setUser({ ...user, email: e.target.value })
    }
    const onChangePassword = (e) => {
        setUser({ ...user, password: e.target.value })
    }

    return (
        <header>
            <GQNavbar></GQNavbar>
            <Hero>
                <Card className="signup-card">
                    <Card.Header as="h5" className="text-start">Create new Account</Card.Header>
                    <Card.Body>
                        <Form className="text-center">
                            <UserForm
                                md="4"
                                col="2"
                                label="Username"
                                type="text"
                                placeholder="Username"
                                onChange={onChangeUsername}
                            />
                            <UserForm
                                col="3"
                                label="Email address"
                                type="email"
                                placeholder="Email"
                                confirmPlaceholder="Confirm Email"
                                onChange={onChangeEmail}
                            />
                            <UserForm
                                col="3"
                                label="Password"
                                type="password"
                                placeholder="Password"
                                confirmPlaceholder="Confirm Password"
                                autocomplete="new-password"
                                onChange={onChangePassword}
                            />
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