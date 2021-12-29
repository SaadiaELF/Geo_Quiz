import { Container, Row, Col, Button } from "react-bootstrap";
import "./hero.css";

function Hero() {
    return (
        <div>
            <Container className="hero">
                <Row>
                    <Col md='12' lg="6" xl="5" className="offset-xl-1 text-center mt-5">
                        <h1>GeoQuiz</h1>
                        <p>Aute Lorem non occaecat ullamco culpa officia. Adipisicing do do pariatur id. Reprehenderit magna elit eu do laboris pariatur adipisicing dolor eu Lorem sint enim excepteur aliquip. Tempor nostrud esse enim fugiat. Labore reprehenderit dolor cillum ipsum culpa officia nisi amet id dolor veniam dolore incididunt qui. Voluptate consectetur labore ipsum dolor aliquip voluptate sit. </p>
                        <Button variant="outline-light" size="lg" >
                            Start
                        </Button>
                    </Col>
                    <Col md="5" lg="5" className="offset-lg-1 offset-xl-0 d-none d-lg-block">
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