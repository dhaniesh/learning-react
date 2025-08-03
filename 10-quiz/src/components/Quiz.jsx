import React from "react";
import { useState, useCallback } from "react";
import QUESTIONS from "../questions.js";
import quizCompleteImg from "../assets/quiz-complete.png";
import Question from "./Question.jsx";

function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;

  const quizComplete = activeQuestionIndex === QUESTIONS.length;
  if (quizComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="Trophy image" />
        <h2>Quiz completed</h2>
      </div>
    );
  }

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  },
  []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  return (
    <div id="quiz">
      <div id="question">
        <Question
          index={activeQuestionIndex}
          onSelectAnswer={handleSelectAnswer}
          onSkipAnswer={handleSkipAnswer}
        />
      </div>
    </div>
  );
}

export default Quiz;
