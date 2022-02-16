const rootReducer = (state, action) => {
    let activeGuess = state.guesses[state.try];
    let newGuesses = state.guesses;

    switch (action.type) {

        case "SubmitGuess":
            let newTry = state.try + 1;
            let win = state.win;
            let end = state.end;
            let addLetters = state.guessed;
            if (activeGuess.at(-1) !== '' && !state.end) {
                newGuesses[state.try] = activeGuess;
                addLetters = addLetters + activeGuess.join('');
                if (newGuesses[state.try].join('') === state.answer.join('')) {
                    win = true;
                    end = true;
                }

                if (newTry === 6) {
                    end = true;
                }
                return {
                    ...state,
                    guesses: newGuesses,
                    try: newTry,
                    change: !state.change,
                    win: win,
                    end: end,
                    guessed: addLetters
                };
            }


        case "InputLetter":

            if (!state.end) {
                if (activeGuess.includes("")) {
                    const index = activeGuess.indexOf('');
                    activeGuess[index] = action.val;
                }

                newGuesses[state.try] = activeGuess

                return {
                    ...state,
                    guesses: newGuesses,
                    change: !state.change
                };
            }


        case "DeleteLetter":

            if (!state.end) {
                let item;
                let stop = false;

                for (let i = activeGuess.length - 1; 0 <= i; i--) {
                    if (!stop) {
                        if (activeGuess[i] !== '') {
                            item = activeGuess[i];
                            stop = true;
                        }
                    }
                }


                const index = activeGuess.lastIndexOf(item);
                activeGuess[index] = '';


                newGuesses[state.try] = activeGuess


                return {
                    ...state,
                    guesses: newGuesses,
                    change: !state.change
                };
            }


        default:
            return state;
    }

}

export default rootReducer;