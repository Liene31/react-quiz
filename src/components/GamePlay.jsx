import style from "../gamePlay.module.css";

export const GamePlay = (props) => {
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

  console.log(results);

  return (
    <div className={style.gamePlay}>
      <header className={style.header}>
        <span className="quiz-progress-label">Question 3 of 5</span>
        <span className="score">Score: 0</span>
      </header>
      <main>
        <h2 className={style.question}>{results[1].question}</h2>
        <button className={style.answer}>Answer 1</button>
        <button className={style.answer}>Answer 2</button>
        <button className={style.answer}>Answer 3</button>
        <button className={style.answer}>Answer 4</button>
      </main>

      {/* If one of the answers is clicked, button is enabled to go to the next question*/}
      <button className="btn">Next</button>

      {/* update logic
hide the button and show it only when question.length === 5 && answer selected  */}
      {/* Navigates to the Score Page */}
      <button onClick={() => props.onClick("showScore")} className="btn">
        Show Score
      </button>
    </div>
  );
};
