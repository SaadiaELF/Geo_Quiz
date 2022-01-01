import { Button, Card, ListGroup } from "react-bootstrap";
import GQNavbar from "../../components/navbar/navbar";
import Hero from "../../components/hero/hero";
import "./Dashboard.css";

function Dashboard() {
    return (
        <header>
            <GQNavbar></GQNavbar>
            <Hero>
                <Card.Header as="h5" className="text-start">UserName</Card.Header>
                <Card.Body>
                    <Card.Title className="text-start">Score History</Card.Title>
                    <Card.Text className="text-start" >
                        <ListGroup as="ol" numbered>
                            <ListGroup.Item as="li" variant="primary" className="d-flex">
                                <div>
                                    Score 1
                                </div>
                                <div>
                                    Date
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item as="li" variant="primary" className="d-flex">
                                <div>
                                    Score 2
                                </div>
                                <div>
                                    Date
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item as="li" variant="primary" className="d-flex">
                                <div>
                                    Score 3
                                </div>
                                <div>
                                    Date
                                </div>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card.Text>
                    <Card.Footer>
                        <Button variant="danger">Clear All</Button>
                    </Card.Footer>
                </Card.Body>
            </Hero>
        </header>
    )
}

export default Dashboard;