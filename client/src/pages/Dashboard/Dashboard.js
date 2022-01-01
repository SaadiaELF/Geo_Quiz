import { Button, Card, ListGroup } from "react-bootstrap";
import GQNavbar from "../../components/navbar/navbar";
import Hero from "../../components/hero/hero";
import "./Dashboard.css";

function Dashboard() {
    return (
        <header>
            <GQNavbar></GQNavbar>
            <Hero>
                <Card className="dashboard-card text-center">
                    <Card.Header as="h5" className="text-start">UserName</Card.Header>
                    <Card.Body>
                        <Card.Title as="h6" className="text-start">Score History</Card.Title>
                        <Card.Text >
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
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="danger">Clear All</Button>
                    </Card.Footer>
                </Card>
            </Hero>
        </header>
    )
}

export default Dashboard;