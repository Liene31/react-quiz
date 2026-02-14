import style from "../gamePlay.module.css";

export const GamePlay = (props) => {
  return (
    <div className={style.gamePlay}>
      <header className={style.header}>
        <span className="quiz-progress-label">Question 3 of 5</span>
        <span className="score">Score: 0</span>
      </header>
      <main>
        <h2 className={style.question}>
          What creature had the head of a bull and body of a man?
        </h2>
        <button className={style.answer}>Answer 1</button>
        <button className={style.answer}>Answer 2</button>
        <button className={style.answer}>Answer 3</button>
        <button className={style.answer}>Answer 4</button>
      </main>

      <button onClick={() => props.onClick("showScore")} className="btn">
        Show Score
      </button>
    </div>
  );
};
