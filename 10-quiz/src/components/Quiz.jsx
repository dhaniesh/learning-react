import React from "react";
import { useState, useCallback } from "react";
import QUESTIONS from "../questions.js";
import quizCompleteImg from "../assets/quiz-complete.png";
import Question from "./Question.jsx";

function Quiz() {
  const [answerState, setAnsweredState] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex =
    answerState === "" ? userAnswers.length : userAnswers.length - 1;

  const quizComplete = activeQuestionIndex === QUESTIONS.length;
  if (quizComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="Trophy image" />
        <h2>Quiz completed</h2>
      </div>
    );
  }

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      setAnsweredState("answered");
      setUserAnswers((prevUserAnswers) => {
        return [...prevUserAnswers, selectedAnswer];
      });
      setTimeout(() => {
        if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
          setAnsweredState("correct");
        } else {
          setAnsweredState("wrong");
        }

        setTimeout(() => {
          setAnsweredState("");
        }, 2000);
      }, 1000);
    },
    [activeQuestionIndex]
  );

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  return (
    <div id="quiz">
      <div id="question">
        <Question
          key={activeQuestionIndex}
          questionText={QUESTIONS[activeQuestionIndex].text}
          answers={QUESTIONS[activeQuestionIndex].answers}
          onSelectAnswer={handleSelectAnswer}
          answerState={answerState}
          selectedAnswer={userAnswers[userAnswers.length - 1]}
          onSkipAnswer={handleSkipAnswer}
        />
      </div>
    </div>
  );
}

export default Quiz;
