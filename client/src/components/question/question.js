import { Card } from "react-bootstrap";

function Question(props) {
    return (
        <Card.Header as="h5">
            <p>Question n° {props.currentQuestion} </p>  <p>Score : {props.score}</p>
        </Card.Header>
    )
}

export default Question;