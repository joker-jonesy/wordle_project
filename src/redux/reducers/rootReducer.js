const rootReducer = (state, action) => {
    let activeGuess = state.guesses[state.try];
    let newGuesses = state.guesses;

    // if(action.type==="SubmitGuess"){
    //
    // }else if(action.type){
    //
    // }else if(action.type){
    //
    // }else{
    //
    // }

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
            break;



        case "InputLetter":

            if (!state.end) {
                const index = activeGuess.indexOf('');
                let wn=false;
                if (activeGuess.includes("")&&index<state.answer.length) {

                    activeGuess[index] = action.val;
                }else{
                    wn=true;
                }

                newGuesses[state.try] = activeGuess

                return {
                    ...state,
                    guesses: newGuesses,
                    change: !state.change,
                    warn:wn,
                    press:!state.press
                };
            }
            break;

        case "ClearWarning":

            return {
                ...state,
                warn: false
            };




        case "DeleteLetter":

            if (!state.end) {
                let wn=false;
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

                if(activeGuess.indexOf('')===0){
                    wn=true;
                }


                const index = activeGuess.lastIndexOf(item);
                activeGuess[index] = '';




                newGuesses[state.try] = activeGuess


                return {
                    ...state,
                    guesses: newGuesses,
                    change: !state.change,
                    warn:wn,
                    press:!state.press
                };
            }
            break;


        default:
            return state;
    }

}

export default rootReducer;