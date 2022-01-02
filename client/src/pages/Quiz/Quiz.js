import { useState, useEffect } from "react";
import { Card, ToggleButton } from "react-bootstrap";
import GQNavbar from "../../components/navbar/navbar";
import Hero from "../../components/hero/hero";
import API from "../../utils/API";
import "./Quiz.css";

function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [questions, setQuestions] = useState([{ question: "", correct_answer: "", answers: [] }]);

    useEffect(() => {
        function getQuestions() {
            API.getQuestions()
                .then(questions => {
                    setQuestions(questions);
                    console.log(questions)
                })
                .catch(err => console.log(err));
        }
        getQuestions()
    }, []);

    const handleAnswerButtonClick = () => {
        const nextQuestion = currentQuestion + 1;
        setCurrentQuestion(nextQuestion);
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            alert('you reached the end of the quiz');
        }
    };
    return (
        <div>
            <header>
                <GQNavbar></GQNavbar>
                <Hero >
                    <Card className="quiz-card text-center">
                        <Card.Header as="h5">Question n° {currentQuestion + 1}</Card.Header>
                        <Card.Body>
                            <Card.Title as="h6" className="text-start">{questions[currentQuestion].question}</Card.Title>
                            <Card.Text className="d-grid gap-2">
                                {questions[currentQuestion].answers.map((answer, idx) => (
                                    <ToggleButton
                                        key={idx}
                                        id={`radio-${idx}`}
                                        className="text-start"
                                        type="radio"
                                        variant='light'
                                        name="radio"
                                        value={answer}
                                        onClick={() => handleAnswerButtonClick()}
                                    >
                                        {answer}
                                    </ToggleButton>
                                ))}
                            </Card.Text>
                        </Card.Body>

                    </Card>
                </Hero>
            </header>
        </div >
    )
}

export default Quiz;