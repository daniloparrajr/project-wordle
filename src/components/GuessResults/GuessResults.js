import React from 'react';
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
function GuessResults({guesses}) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED, 1).map((rowIndex) => (
        <p key={`rowIndex${rowIndex}`} className="guess">
          {range(0, 5, 1).map((columnIndex) => (
            <span
              key={`columnIndex${rowIndex}${columnIndex}`}
              className="cell">
              {guesses[rowIndex] && [...guesses[rowIndex]][columnIndex]}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
