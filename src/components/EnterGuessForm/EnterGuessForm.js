import React, {useState} from 'react';

function EnterGuessForm({ isGameOver, handleEnterGuess }) {
  const [guess, setGuess] = useState('');

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        handleEnterGuess(guess);
        setGuess('');
      }}
      className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input disabled={!!isGameOver} pattern="[A-Z]{5,5}" required={true} id="guess-input" type="text" value={guess} onChange={(e) => setGuess(e.target.value)} />
    </form>
  );
}

export default EnterGuessForm;
