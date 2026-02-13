import "../startScreen.css";

export const StartScreen = (props) => {
  return (
    <div className="start-screen">
      <header>
        <h1>Quiz Game</h1>
        <p>Description of the game</p>
      </header>
      <main>
        <form>
          <label htmlFor="category-select">Choose a category:</label>
          <select name="category" id="category-select">
            <option value="">--Choose a category--</option>
            <option value="sport">Sport</option>
            <option value="animals">Animals</option>
            <option value="food">Food</option>
          </select>
          <button onClick={() => props.onClick("startGame")}>Start Game</button>
        </form>
      </main>
    </div>
  );
};
