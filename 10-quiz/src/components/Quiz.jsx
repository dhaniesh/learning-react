import React from "react";
import { useState } from "react";
import QUESTIONS from "../questions.js";
import quizCompleteImg from '../assets/quiz-complete.png'
function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;

  const quizComplete = activeQuestionIndex === QUESTIONS.length;
  if (quizComplete) {
    return (
        <div id="summary">
<img src={quizCompleteImg} alt="Trophy image" /><h2>Quiz completed</h2>
        </div>
    )
  }

  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers].sort(
    () => Math.random() - 0.5
  );
  function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  }

  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Quiz;
