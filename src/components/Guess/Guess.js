import React from 'react';
import {range} from "../../utils";


function Guess({guess}) {
  return (
    <p className="guess">
      {range(0, 5, 1).map((index) => {
        let cellClasses = 'cell';

        if (guess[index]) {
          cellClasses += ` ${guess[index].status}`;
        }

        return (
          <span key={index} className={cellClasses}>
            {guess[index]?.letter}
          </span>
        )
      })}
    </p>
  );
}

export default Guess;
