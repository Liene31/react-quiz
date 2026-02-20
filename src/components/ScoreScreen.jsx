import style from "../scoreScreen.module.css";

export const ScoreScreen = (props) => {
  const percentage = (props.score / props.questionLength) * 100;
  return (
    <div className={style.scoreScreen}>
      <h2 className={style.title}>Quiz Completed</h2>

      <div className={style.scoreWrapper}>
        <span className={style.score}>
          {props.score}/{props.questionLength}
        </span>
        <h3 className={style.subtitle}>Keep on playing</h3>
        <p className={style.text}>You answered {percentage}% correctly</p>
      </div>
      <button onClick={() => props.onClick("startPage")} className="btn">
        Back to start
      </button>
    </div>
  );
};
