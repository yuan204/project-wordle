import React from 'react';
import Guess from "../Guess";
import {range} from "../../utils";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";

const nums = range(NUM_OF_GUESSES_ALLOWED)
function GuessResults({guesses, answer}) {

    return (
        <div className="guess-results">
            {
                nums.map((num) => (
                    <Guess key={num} answer={answer} value={guesses[num]} />
                ))
            }

        </div>
    )

}

export default GuessResults;
