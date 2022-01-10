import axios from "axios";
const BASEURL = "https://opentdb.com/api.php?amount=15&category=22&type=multiple";

export default {
    getQuestions: function () {
        return axios.get(BASEURL)
            .then(res => {
                const questions = res.data.results;
                // Map trough out the API results and store the in an array of objects
                return questions.map(question => {
                    const answers = [
                        [question.incorrect_answers[0], false],
                        [question.incorrect_answers[1], false],
                        [question.incorrect_answers[2], false],
                        [question.correct_answer, true]
                    ]
                    answers.sort(function (a, b) { return 0.5 - Math.random() });
                    return {
                        question: question.question,
                        correct_answer: question.correct_answer,
                        answers: answers
                    };
                })
            })
    }
};