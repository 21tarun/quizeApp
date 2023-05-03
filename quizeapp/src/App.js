
import './App.css';
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "Berlin", "London", "Rome"],
      answer: "Paris",
    },
    {
      question: "What is the tallest mountain in the world?",
      choices: ["Mount Everest", "Mount Kilimanjaro", "Mount McKinley", "Mount Fuji"],
      answer: "Mount Everest",
    },
    {
      question: "Who invented the telephone?",
      choices: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
      answer: "Alexander Graham Bell",
    },
    {
      question:"4+4+4+4*0=?",
      choices:['0','16','12','40'],
      answer:'12'
    },
    {
      question:"4!=?",
      choices:['4','16','0','24'],
      answer:'24'
    }
  ]
  const handleAnswer = (answer) => {
    setUserAnswers([...userAnswers, answer]);
    setCurrentQuestion(currentQuestion + 1);
  };
  return (
    <div className="container mt-5">
      {currentQuestion < questions.length ? (
        <>
          <h2>{questions[currentQuestion].question}</h2>
          <div className="list-group mt-3">
            {questions[currentQuestion].choices.map((choice, index) => (
              <button
                className="list-group-item list-group-item-action"
                key={index}
                onClick={() => handleAnswer(choice)}
              >
                {choice}
              </button>
            ))}
          </div>
        </>
      ) : (
        <h2>
          You scored{" "}
          {userAnswers.filter((answer, index) => answer === questions[index].answer).length} out of {questions.length}
        </h2>
      )}
    </div>
  );
}

export default App;
