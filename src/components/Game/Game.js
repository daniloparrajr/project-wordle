import React, {useState} from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import {checkGuess} from "../../game-helpers";

import EnterGuessForm from "../EnterGuessForm";
import GuessResults from "../GuessResults";
import Banner from "../Banner";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";

// Pick a random word on every page load.
const answer = sample(WORDS);

// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isWinner, setIsWinner] = useState(false);

  function handleEnterGuess(guess) {
    const newGuesses = [...guesses];
    const newGuess = checkGuess(guess, answer);
    newGuesses.push(newGuess);
    setGuesses(newGuesses);

    const isGuessCorrect = newGuess.every((letter) => letter.status === 'correct');

    if (isGuessCorrect) {
      setIsGameOver(true);
      setIsWinner(true);
    } else if (newGuesses.length === NUM_OF_GUESSES_ALLOWED ) {
      setIsGameOver(true);
      setIsWinner(false);
    }
  }

  return (
    <>
      <GuessResults guesses={guesses}/>
      <EnterGuessForm isGameOver={isGameOver} handleEnterGuess={handleEnterGuess} />

      {isGameOver && isWinner && (
        <Banner type="happy">
          <p>
            <strong>Congratulations!</strong> Got it in {" "}
            <strong>{guesses.length} guesses</strong>.
          </p>
        </Banner>
      )}

      {isGameOver && !isWinner && (
        <Banner type="sad">
          <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
        </Banner>
      )}
    </>
  );
}

export default Game;
