import React, {useState} from 'react';

function GuessInput({addGuess, disabled = false}) {
    const [guess, setGuess] = useState('')
    const handleSubmit = e => {
        e.preventDefault()
        addGuess(guess)
        setGuess('')
    }
    return (
        <form className="guess-input-wrapper" onSubmit={handleSubmit}>
            <label htmlFor="guess-input">Enter guess:</label>
            <input disabled={disabled} id="guess-input" title="5 letter words" pattern="[a-zA-Z]{5}" minLength={5} maxLength={5}
                   value={guess} onChange={e => setGuess(e.target.value.toUpperCase())} type="text"/>
        </form>
    )
}

export default GuessInput;
