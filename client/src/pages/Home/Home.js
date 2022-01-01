import { Button, Card } from "react-bootstrap";
import GQNavbar from "../../components/navbar/navbar";
import Hero from "../../components/hero/hero";
import "./Home.css";

function Home() {
    return (
        <header>
            <GQNavbar></GQNavbar>
            <Hero>
            <Card className="home-card text-center">
                <Card.Body>
                    <h1>GeoQuiz</h1>
                    <p>Aute Lorem non occaecat ullamco culpa officia. Adipisicing do do pariatur id. Reprehenderit magna elit eu do laboris pariatur adipisicing dolor eu Lorem sint enim excepteur aliquip. Tempor nostrud esse enim fugiat. Labore reprehenderit dolor cillum ipsum culpa officia nisi amet id dolor veniam dolore incididunt qui. Voluptate consectetur labore ipsum dolor aliquip voluptate sit. </p>
                    <Button variant="outline-light" size="lg" >
                        Start
                    </Button>
                </Card.Body>
            </Card>
            </Hero>
        </header>
    )
}

export default Home;