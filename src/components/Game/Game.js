import React, {useState} from 'react';

import {sample} from '../../utils';
import {WORDS} from '../../data';
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import Banner from "../Banner";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";
import WonBanner from "../WonBanner";
import FailBanner from "../FailBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({answer});

function Game() {
    const [gameStatus, setGameStatus] = useState('running')
    const [guesses, setGuesses] = useState([])
    const answer = sample(WORDS);
    const addGuess = guess => {
        const nextGuess = [...guesses, guess]
        setGuesses(nextGuess)
        if (guess === answer) {
            setGameStatus('success')
        }
        if (nextGuess.length >= NUM_OF_GUESSES_ALLOWED) {
            setGameStatus('failed')
        }
    }

    return <>
        <GuessResults guesses={guesses} answer={answer} />
        {gameStatus === 'success' && <WonBanner guessNum={guesses.length} />}
        {gameStatus === 'failed' && <FailBanner answer={answer} />}
        <GuessInput disabled={gameStatus !== 'running'} addGuess={addGuess}/>


    </>;
}

export default Game;
