import { Container, Row } from "react-bootstrap";
import "./hero.css";

function Hero(props) {
    return (
        <div>
            <Container className="hero">
                <Row className="justify-content-center" >
                    {props.children}
                </Row>
            </Container>
        </div>
    )
}

export default Hero;