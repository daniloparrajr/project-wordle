import React, {useState} from 'react';

function EnterGuessForm({ status, handleEnterGuess }) {
  const [guess, setGuess] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    handleEnterGuess(guess);
    setGuess('');
  }

  function handleInput(event) {
    setGuess(event.target.value.toUpperCase());
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        disabled={status !== 'running'}
        pattern="[A-Z]{5}"
        required={true}
        id="guess-input"
        type="text"
        value={guess}
        title="5 letter word"
        onChange={handleInput}
      />
    </form>
  );
}

export default EnterGuessForm;
