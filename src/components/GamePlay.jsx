import { useEffect, useState } from "react";
import axios from "axios";
import { clsx } from "clsx";
import style from "../gamePlay.module.css";

export const GamePlay = (props) => {
  //State variable
  const [results, setResults] = useState([]);
  const [index, setIndex] = useState(0);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);

  console.log(props.category);

  useEffect(() => {
    axios
      .get(`https://opentdb.com/api.php?amount=5&category=19&type=multiple`)
      .then((res) => {
        setResults(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //Function to shuffle Array
  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  useEffect(() => {
    if (!results[index]) {
      return;
    }
    const wrongAnswers = results[index]?.incorrect_answers;
    const correctAnswer = results[index]?.correct_answer;
    const shuffled = shuffle([...wrongAnswers, correctAnswer]);

    setShuffledAnswers(shuffled);
  }, [index, results]);

  //Button - increase the index and moves to next question
  function handleNextQuestion() {
    setIndex((prev) => prev + 1);
    setSelectedAnswer("");
  }

  //Button - detects, which of the answers are clicked
  function handleAnswer(chosenAnswer) {
    setSelectedAnswer(chosenAnswer);
    setScore((prev) => {
      return results[index]?.correct_answer === chosenAnswer ? prev + 1 : prev;
    });
  }

  return (
    <div className={style.gamePlay}>
      <header className={style.header}>
        <span className="quiz-progress-label">
          Question {index + 1} of {results.length}
        </span>
        <span className="score">Score: {score}</span>
      </header>
      <main>
        <h2 className={style.question}>{results[index]?.question}</h2>
        {shuffledAnswers.map((answers, i) => {
          //User has selected a specific answer but it doesn't evaluate it's correctness
          const isSelected = answers === selectedAnswer;
          const isCorrect = answers === results[index].correct_answer;
          //User has selected something, doesn't matter what
          const hasAnswered = Boolean(selectedAnswer);
          //Based on the conditions, applies correct styling
          const className = clsx(style.answer, {
            [style.correct]: hasAnswered && isCorrect,
            [style.wrong]: isSelected && !isCorrect,
          });

          return (
            <button
              key={i}
              className={className}
              disabled={hasAnswered}
              onClick={() => handleAnswer(answers)}
            >
              {answers}
            </button>
          );
        })}
      </main>

      {/* If one of the answers is clicked, button is enabled to go to the next question*/}
      {index < results.length - 1 && (
        <button
          className="btn"
          onClick={handleNextQuestion}
          disabled={!selectedAnswer}
        >
          Next
        </button>
      )}

      {/* Navigates to the Score Page */}
      {index >= results.length - 1 && (
        <button
          onClick={() => props.onClick("showScore", score, results.length)}
          className="btn"
          disabled={!selectedAnswer}
        >
          Show Score
        </button>
      )}
    </div>
  );
};
