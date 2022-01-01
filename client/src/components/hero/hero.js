import { Container, Row, Card } from "react-bootstrap";
import "./hero.css";

function Hero(props) {
    return (
        <div>
            <Container className="hero">
                <Row className="justify-content-center" >
                    <Card className="Card text-center">
                        <Card.Body>
                            {props.children}
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </div>
    )
}

export default Hero;