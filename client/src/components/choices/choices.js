import React, { useContext } from "react";
import { Card, ToggleButton } from "react-bootstrap";
import QuestionContext from "../../utils/QuestionContext";

function Choices(props) {
    const { handleAnswerButtonClick, handleShow } = props
    const questions = useContext(QuestionContext);

    return (
        <Card.Body>
            <Card.Title as="h6" className="text-start" dangerouslySetInnerHTML={{ __html: questions[props.currentQuestion].question }} />
            <Card.Text className="d-grid gap-2">
                {questions[props.currentQuestion].answers.map((answer, idx) => (
                    <ToggleButton
                        key={idx}
                        id={`radio-${idx}`}
                        className="text-start"
                        type="radio"
                        variant='outline-secondary'
                        name="radio"
                        value={answer[1]}
                        onClick={() => { handleAnswerButtonClick(answer[1]); handleShow() }}
                        dangerouslySetInnerHTML={{ __html: answer[0] }}
                    />
                ))}
            </Card.Text>
        </Card.Body>
    )
}

export default Choices;