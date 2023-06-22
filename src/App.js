import "./styles.css";
import { useEffect, useState } from "react";
import SinglePair from "./components/SinglePair";

//image imports for marine life theme
import starfish from "./images/starfish.jpg";
import mani from "./images/Mani.jpg";
import mant from "./images/mantis.webp";
import horse from "./images/horse.jpg";
import jelly from "./images/jFish.jpg";
import oct from "./images/octa.jpg";

//image imports for fashion designers theme
import chanel from "./images/chanel.jpg";
import iApfel from "./images/iApfel.jpg";
import dior from "./images/dior.jpg";
import jacobs from "./images/jacobs.jpg";
import stella from "./images/stellaM.jpg";
import val from "./images/valentino.jpg";
import RadioButtonGroup from "./components/RadioButtonGroup.js";

//image imports for minimalist theme
import green from "./images/green.png";
import red from "./images/red.png";
import white from "./images/white.png";
import yellow from "./images/yellow.gif";
import blue from "./images/blue.png";
import black from "./images/black.jpg";

//image imports for musicians theme
import mj from "./images/MJ.jpg";
import rhc from "./images/Chilis.jpg";
import bab from "./images/baby.jpg";
import ts from "./images/TS.jpg";
import bon from "./images/bonJ.jpg";
import dion from "./images/Dion.jpg";

var minImages = [
  { src: green, matched: false },
  { src: red, matched: false },
  { src: white, matched: false },
  { src: yellow, matched: false },
  { src: blue, matched: false },
  { src: black, matched: false }
];

var musicImages = [
  { src: mj, matched: false },
  { src: rhc, matched: false },
  { src: bab, matched: false },
  { src: ts, matched: false },
  { src: bon, matched: false },
  { src: dion, matched: false }
];

var pairImages = [
  { src: starfish, matched: false },
  { src: mani, matched: false },
  { src: mant, matched: false },
  { src: horse, matched: false },
  { src: jelly, matched: false },
  { src: oct, matched: false }
];

const fashionImages = [
  { src: chanel, matched: false },
  { src: iApfel, matched: false },
  { src: dior, matched: false },
  { src: jacobs, matched: false },
  { src: stella, matched: false },
  { src: val, matched: false }
];

export default function App() {
  const [pairs, setPairs] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Marine Life");
  const [theme, setTheme] = useState(selectedOption);

  function handleChange(event) {
    setSelectedOption(event.target.value);
  }

  //shuffling
  const shufftlePairs = () => {
    //if statement and a variable
    setTheme(selectedOption);
    var images = null;
    switch (theme) {
      case "Fashion Designers":
        images = fashionImages;
        break;
      case "Minimalist":
        images = minImages;
        break;
      case "Musicians":
        images = musicImages;
        break;
      default:
        images = pairImages;
    }
    const shufflePairs = [...images, ...images]
      .sort(() => Math.random() - 0.5)
      .map((pair) => ({ ...pair, id: Math.random() }));
    setChoiceOne(null);
    setChoiceTwo(null);
    setPairs(shufflePairs);
    setTurns(0);
  };

  //choice handling
  const handleChoice = (pair) => {
    choiceOne ? setChoiceTwo(pair) : setChoiceOne(pair);
  };

  //comparing a pair
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        setDisabled(true);
        setPairs((prevPairs) => {
          return prevPairs.map((pair) => {
            if (pair.src === choiceOne.src) {
              return { ...pair, matched: true };
            } else {
              return pair;
            }
          });
        });
        resetTurn(); //resets pair values to null
      } else {
        setTimeout(() => resetTurn(), 1500);
        //resets pair values to null after a 1.5 second delay so the u0ser can see they are unmatched
      }
    }
  }, [choiceOne, choiceTwo]);

  //resetting after a turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  //at the end of the game, automatically start a new turn
  useEffect(() => {
    shufftlePairs();
  }, []);

  return (
    <div className="App">
      <div>
        <RadioButtonGroup
          selectedOption={selectedOption}
          handleChange={handleChange}
        />
      </div>
      <h1>Memory Game</h1>
      <button onClick={shufftlePairs}> New Game </button>
      <div className="pair-grid">
        {pairs.map((pair) => (
          <SinglePair
            key={pair.id}
            pair={pair}
            handleChoice={handleChoice}
            flipped={pair === choiceOne || pair === choiceTwo || pair.matched}
            disabled={disabled}
          />
        ))}
      </div>
      <p>Turns: {turns}</p>
    </div>
  );
}
