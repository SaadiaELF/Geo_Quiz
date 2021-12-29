import { Container, Row, Col } from "react-bootstrap";
import "./hero.css";

function Hero() {
    return (
        <div>
            <Container className="hero">
                <Row>
                    <Col>
                    </Col>
                    <Col>
                    </Col>
                    {/* <div class="col-12 col-lg-6 col-xl-5 offset-xl-1">
                        <h1>The revolution is here.</h1>
                        <p>Mauris egestas tellus non ex condimentum, ac ullamcorper sapien dictum. Nam consequat neque quis sapien viverra convallis. In non tempus lorem. </p><button class="btn btn-light btn-lg action-button" type="button">Learn More</button></div>
                    <div class="col-md-5 col-lg-5 offset-lg-1 offset-xl-0 d-none d-lg-block phone-holder">
                        <div class="iphone-mockup"><img src="assets/img/iphone.svg" class="device">
                            <div class="screen"></div>
                    </div> */}
                </Row>
            </Container>
        </div>
    )
}

export default Hero;