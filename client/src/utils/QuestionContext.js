import React from "react";

const QuestionContext = React.createContext({
    question: "",
    correct_answer: "",
    answers: []
});

export default QuestionContext;
