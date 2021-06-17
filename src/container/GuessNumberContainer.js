import React, { useEffect, useState } from "react";
import NumberInput from "../componenent/NumberInput";

function GuessNumberContainer() {
  const [GuessedNumber, SetGuessedNumber] = useState(0);
  const [randomNumber, setRandomNumber] = useState(0);
  const [message, setMessage] = useState("");
  const [gameState, setGameState] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [prevGuesses, setPrevGuesses] = useState([]);
  const [maxAttempts] = useState(8);
  useEffect(() => {
    generateRandomNumber(100);
  }, []);
  const getInput = (event) => {
    console.log(event.target.value);
    SetGuessedNumber(parseInt(event.target.value));
  };
  const generateRandomNumber = (max) => {
    let randomNum = Math.floor(Math.random() * max);
    setRandomNumber(randomNum);
    console.log(randomNum);
  };
  const checkNumber = (e) => {
    e.preventDefault();
    setAttempts(attempts + 1);
    setPrevGuesses([...prevGuesses, GuessedNumber]);
    console.log(GuessedNumber, randomNumber);
    if (GuessedNumber === randomNumber) {
      setMessage("Bingo you got it");
      setGameState(1);
    } else if (GuessedNumber < randomNumber) {
      setMessage("Your guess is too lower than this random number.");
      setGameState(0);
    } else if (GuessedNumber > randomNumber && GuessedNumber <= 100) {
      setMessage("Your guess is too higher than this random number");
      setGameState(0);
    } else if (GuessedNumber > 100) {
      setMessage("You have guessed a number greater than 100");
      setGameState(0);
    }
  };
  const resetGame = () => {
    generateRandomNumber(100);
    SetGuessedNumber("");
    setAttempts(0);
    setPrevGuesses([]);
    setMessage("");
    setGameState(0);
    document.getElementById("mainInput").value = "";
  };
  return (
    <>
      <NumberInput
        attempts={attempts}
        onSubmit={checkNumber}
        onChange={getInput}
        maxAttempts={maxAttempts}
      ></NumberInput>
      <div className="text-wrapper">
        <p className={gameState ? "success" : "error"}>{message}</p>
        {prevGuesses.length > 0 || gameState ? (
          <p>Previous guesses:{prevGuesses.join()}</p>
        ) : (
          ""
        )}
        <p>
          {attempts === maxAttempts
            ? "Game over"
            : `You have ${maxAttempts - attempts} attempts left`}
        </p>
        {attempts === maxAttempts || gameState === 1 ? (
          <button className="btn" onClick={resetGame}>
            Reset
          </button>
        ) : null}
      </div>
    </>
  );
}

export default GuessNumberContainer;
