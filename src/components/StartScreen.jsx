import { useState } from "react";
import "../startScreen.css";

export const StartScreen = (props) => {
  const [categories, setCategories] = useState("");

  //Replace by API data
  const categoryList = ["sport", "animals", "food", "geography"];

  const chooseCategory = categoryList.map((category) => {
    return (
      <option key={category} value={category}>
        {category}
      </option>
    );
  });

  //Update the state variable on any change
  //
  function handleCategories(e) {
    setCategories(e.target.value);
  }

  // RETURN
  return (
    <div className="start-screen">
      <header>
        <h1>Quiz Game</h1>
        <p>Description of the game</p>
      </header>
      <main>
        <form>
          <label htmlFor="category-select">Choose a category:</label>
          <select
            name="category"
            id="category-select"
            value={categories}
            onChange={handleCategories}
          >
            <option value="">--Choose a category--</option>
            {chooseCategory}
          </select>
          <button onClick={() => props.onClick("startGame")}>Start Game</button>
        </form>
      </main>
    </div>
  );
};
