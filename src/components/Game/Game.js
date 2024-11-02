import React, {useState} from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import EnterGuessForm from "../EnterGuessForm";
import GuessResults from "../GuessResults";
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);

  function handleEnterGuess(guess) {
    const newGuesses = [...guesses];
    newGuesses.push(guess);
    setGuesses(newGuesses);
  }

  return <>
    <GuessResults guesses={guesses} />
    <EnterGuessForm handleEnterGuess={handleEnterGuess} />
  </>;
}

export default Game;
