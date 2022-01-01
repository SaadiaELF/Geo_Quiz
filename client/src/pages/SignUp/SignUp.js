import { Card } from "react-bootstrap";
import GQNavbar from "../../components/navbar/navbar";
import Hero from "../../components/hero/hero";
import "./SignUp.css";

function Home() {
    return (
        <header>
            <GQNavbar></GQNavbar>
            <Hero>
                <Card.Body>
                </Card.Body>
            </Hero>
        </header>
    )
}

export default Home;