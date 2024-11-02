import React from 'react';
import {range} from "../../utils";
import {checkGuess} from "../../game-helpers";


function Cell({letter, status}) {
  let classes = status ? `cell ${status}` : 'cell';
  return (
    <span className={classes}>
      {letter}
    </span>
  )
}

function Guess({value, answer}) {
  const result = checkGuess(value, answer);
  return (
    <p className="guess">
      {range(0, 5, 1).map((index) => {
        return (
          <Cell
            key={index}
            letter={result ? result[index].letter : undefined}
            status={result ? result[index].status : undefined}
          />
        )
      })}
    </p>
  );
}

export default Guess;
