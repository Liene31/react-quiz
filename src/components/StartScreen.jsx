import { useState } from "react";
import style from "../startScreen.module.css";

export const StartScreen = (props) => {
  const [chooseCategory, setChooseCategory] = useState("");

  //Replace by API data
  const categoryList = ["sport", "animals", "food", "geography"];

  //Loops through the list and fills the option with all the categories
  const categories = categoryList.map((category) => {
    return (
      <option key={category} value={category}>
        {category}
      </option>
    );
  });

  //Update the state variable on any change
  //allows to select category from the list
  function handleCategories(e) {
    setChooseCategory(e.target.value);
  }

  // RETURN
  return (
    <div className={style.startScreen}>
      <header>
        <h1 className={style.title}>Quiz Game</h1>
        <p className={style.subtitle}>Description of the game</p>
      </header>
      <main>
        <form>
          <label htmlFor="category-select">Choose a category:</label>
          <select
            className={style.selectCategory}
            name="category"
            id="category-select"
            value={chooseCategory}
            onChange={handleCategories}
          >
            <option value="">--Choose a category--</option>
            {categories}
          </select>
          <button
            onClick={() => props.onClick("startGame")}
            type="button"
            className="btn"
            //if category not chosen, returns true
            disabled={!chooseCategory}
          >
            Start Game
          </button>
        </form>
      </main>
    </div>
  );
};
