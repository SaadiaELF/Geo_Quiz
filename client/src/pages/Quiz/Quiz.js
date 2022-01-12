import { useState, useEffect } from "react";
import { Card, ToggleButton, Modal, Button } from "react-bootstrap";
import GQNavbar from "../../components/navbar/navbar";
import Hero from "../../components/hero/hero";
import API from "../../utils/API";
import "./Quiz.css";

function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [questions, setQuestions] = useState([{ question: "", correct_answer: "", answers: [] }]);
    const [score, setScore] = useState(0);
    const [choice, setChoice] = useState("");
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        function getQuestions() {
            API.getQuestions()
                .then(questions => {
                    setQuestions(questions);
                })
                .catch(err => console.log(err));
        }
        getQuestions()
    }, []);

    const handleAnswerButtonClick = (answer) => {
        const nextQuestion = currentQuestion + 1;
        setCurrentQuestion(nextQuestion);
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
            if (answer === true) {
                setChoice("Correct!");
                setScore(score + 10);
            }
            else {
                setChoice("Incorrect!")
            }
        } else {
            alert('you reached the end of the quiz');
        }
    };
    return (
        <div>
            <header>
                <GQNavbar></GQNavbar>
                <Hero >
                    <Card className="quiz-card">
                        <Card.Header as="h5">
                            <p>Question n° {currentQuestion + 1} </p>  <p>Score : {score}</p>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title as="h6" className="text-start" dangerouslySetInnerHTML={{ __html: questions[currentQuestion].question }} />
                            <Card.Text className="d-grid gap-2">
                                {questions[currentQuestion].answers.map((answer, idx) => (
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
                        <Modal show={show} onHide={handleClose} animation={false}>
                            <Modal.Header closeButton>
                                <Modal.Title>{choice}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>{choice === 'Correct!' ? "Genius!" : "Sorry!"}</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Card>
                </Hero>
            </header>
        </div >
    )
}

export default Quiz;