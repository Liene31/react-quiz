import { useState } from "react";
import style from "../gamePlay.module.css";

export const GamePlay = (props) => {
  const [index, setIndex] = useState(0);
  const results = [
    {
      type: "multiple",
      difficulty: "medium",
      category: "General Knowledge",
      question:
        "In a 1994 CBS interview, Microsoft co-founder Bill Gates performed what unusual trick on camera?",
      correct_answer: "Jumping over an office chair",
      incorrect_answers: [
        "Jumping backwards over a desk",
        "Standing on his head",
        "Typing on a keyboard during a handstand",
      ],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "General Knowledge",
      question: "A statue of Charles Darwin sits in what London museum?",
      correct_answer: "Natural History Museum",
      incorrect_answers: ["Tate", "British Museum", "Science Museum"],
    },
  ];

  //Function to shuffle Array
  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  function handleNextQuestion() {
    setIndex((prev) => prev + 1);
  }

  const wrongAnswers = results[index].incorrect_answers;
  const answerOptionsShuffled = shuffle([
    ...wrongAnswers,
    results[index].correct_answer,
  ]);

  return (
    <div className={style.gamePlay}>
      <header className={style.header}>
        <span className="quiz-progress-label">Question 3 of 5</span>
        <span className="score">Score: 0</span>
      </header>
      <main>
        <h2 className={style.question}>{results[index].question}</h2>
        {answerOptionsShuffled.map((answers, index) => (
          <button key={index} className={style.answer}>
            {answers}
          </button>
        ))}
      </main>

      {/* If one of the answers is clicked, button is enabled to go to the next question*/}
      {index < 1 && (
        <button className="btn" onClick={handleNextQuestion}>
          Next
        </button>
      )}

      {/* update logic
hide the button and show it only when question.length === 5 && answer selected  */}
      {/* Put two conditions, also if the answer is chosen */}
      {/* Navigates to the Score Page */}
      {index >= 1 && (
        <button onClick={() => props.onClick("showScore")} className="btn">
          Show Score
        </button>
      )}
    </div>
  );
};
