import { Card } from "react-bootstrap";
import GQNavbar from "../../components/navbar/navbar";
import Hero from "../../components/hero/hero";
import "./SignUp.css";

function SignUp() {
    return (
        <header>
            <GQNavbar></GQNavbar>
            <Hero>
                <Card className="Card text-center">
                    <Card.Body>
                    </Card.Body>
                </Card>
            </Hero>
        </header>
    )
}

export default SignUp;