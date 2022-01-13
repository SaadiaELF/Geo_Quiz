import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import GQNavbar from "../../components/navbar/navbar";
import Hero from "../../components/hero/hero";
import API from "../../utils/API";
import "./Quiz.css";
import Question from "../../components/question/question";
import AnswerModal from "../../components/answerModal/answerModal";
import QuestionContext from "../../utils/QuestionContext";
import Choices from "../../components/choices/choices";

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
        <QuestionContext.Provider value={questions}>
            <header>
                <GQNavbar></GQNavbar>
                <Hero >
                    <Card className="quiz-card">
                        <Question
                            currentQuestion={currentQuestion + 1}
                            score={score}
                        />
                        <Choices
                            currentQuestion={currentQuestion}
                            handleAnswerButtonClick={handleAnswerButtonClick}
                            handleShow={handleShow}
                        />
                        <AnswerModal
                            show={show}
                            handleClose={handleClose}
                            choice={choice}
                        />
                    </Card>
                </Hero>
            </header>
        </QuestionContext.Provider>
    )
}

export default Quiz;