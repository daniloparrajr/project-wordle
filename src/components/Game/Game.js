import React, {useState} from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

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
  const [status, setStatus] = useState('running'); // running | lost | won

  function handleEnterGuess(guess) {
    const newGuesses = [...guesses, guess];
    setGuesses(newGuesses);

    if (guess === answer) {
      setStatus('won');
    } else if (newGuesses.length === NUM_OF_GUESSES_ALLOWED ) {
      setStatus('lost');
    }
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <EnterGuessForm status={status} handleEnterGuess={handleEnterGuess} />

      {status === 'won' && (
        <Banner type="happy">
          <p>
            <strong>Congratulations!</strong> Got it in {" "}
            <strong>{guesses.length === 1 ? '1 guess' : `${guesses.length} guesses`} </strong>.
          </p>
        </Banner>
      )}

      {status === 'lost' && (
        <Banner type="sad">
          <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
        </Banner>
      )}
    </>
  );
}

export default Game;
