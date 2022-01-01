import { useState } from "react";
import { Button, Card,ToggleButton } from "react-bootstrap";
import GQNavbar from "../../components/navbar/navbar";
import Hero from "../../components/hero/hero";

function Quiz() {
    const [radioValue, setRadioValue] = useState('1');
    const answers = [
        { name: 'Answer 1', value: '1' },
        { name: 'Answer 2', value: '2' },
        { name: 'Answer 3', value: '3' },
    ];

    return (
        <div>
            <header>
                <GQNavbar></GQNavbar>
                <Hero >
                    <Card.Header as="h5">Question n°</Card.Header>
                    <Card.Body>
                        <Card.Title className="text-start">Question text</Card.Title>
                        <Card.Text className="d-grid gap-2">
                            {answers.map((radio, idx) => (
                                <ToggleButton
                                    key={idx}
                                    id={`radio-${idx}`}
                                    className="text-start"
                                    type="radio"
                                    variant='light'
                                    name="radio"
                                    value={radio.value}
                                    checked={radioValue === radio.value}
                                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                                >
                                    {radio.name}
                                </ToggleButton>
                            ))}
                        </Card.Text>
                        <Card.Footer className="text-end">
                            <Button variant="danger">Next</Button>
                        </Card.Footer>
                    </Card.Body>
                </Hero>
            </header>
        </div >
    )
}

export default Quiz;