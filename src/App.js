import React from "react";
import "./styles.css";

export default function App() {
  function handlePet() {
    console.log("Thanks for petting");
  }

  return (
    <div>
      <Pet
        sound="Miau"
        emoji="🐈"
        name="cat"
        age={12}
        onPet={handlePet}
        isHungry
      />
      <Pet sound="Wuff" emoji="🐶" name="dog" age={3} onPet={handlePet} />
      <Pet
        sound="Piep"
        emoji="🐭"
        name="mouse"
        age={12}
        onPet={handlePet}
        isHungry={false}
      />
    </div>
  );
}

function Pet({ sound, emoji, name, onPet, isHungry }) {
  return (
    <div onClick={onPet}>
      {isHungry ? "Feed me!" : sound}
      <span aria-label={name}>{emoji}</span>
    </div>
  );
}
