export const ScoreScreen = (props) => {
  console.log(props);
  return (
    <button onClick={() => props.onClick("startPage")}>Back to start</button>
  );
};
