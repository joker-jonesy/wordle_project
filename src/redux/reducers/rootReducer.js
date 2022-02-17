import initState from "../store/initState";
import {save} from "./LocalStorage";

const rootReducer = (state, action) => {
    let activeGuess = state.guesses[state.try];
    let newGuesses = state.guesses;

    switch (action.type) {

        case "ToggleHelp":

            let nS = {
                ...state,
                help: !state.help
            }

            save(nS);
            return nS;

        case "NewGame":
            const newState = initState();
            let nG = {
                try: newState.try,
                guesses: newState.guesses,
                answer: newState.answer,
                guessed: newState.guessed,
                change: newState.change,
                end: newState.end,
                win: newState.win,
                warn: newState.warn,
                press: newState.press,
                help: false
            }

            save(nG);

            return nG;


        case "SubmitGuess":
            let newTry = state.try + 1;
            let win = state.win;
            let end = state.end;
            let addLetters = state.guessed;
            let nGs;

            if (activeGuess.indexOf('') === -1 && !state.end) {
                newGuesses[state.try] = activeGuess;
                addLetters = addLetters + activeGuess.join('');
                if (newGuesses[state.try].join('') === state.answer.join('')) {
                    win = true;
                    end = true;
                }

                if (newTry === 6) {
                    end = true;
                }
                nGs={
                    ...state,
                    guesses: newGuesses,
                    try: newTry,
                    change: !state.change,
                    win: win,
                    end: end,
                    guessed: addLetters,
                    warn: false,
                    press: !state.press
                };
                save(nGs)
                return nGs;
            } else {
                nGs={
                    ...state,
                    warn: true,
                    press: !state.press
                }
                save(nGs)
                return nGs;
            }


        case "InputLetter":

            let nL;

            if (!state.end) {
                const index = activeGuess.indexOf('');
                let wn = false;
                if (activeGuess.includes("") && index < state.answer.length) {

                    activeGuess[index] = action.val;
                } else {
                    wn = true;
                }

                newGuesses[state.try] = activeGuess

                nL={
                    ...state,
                    guesses: newGuesses,
                    change: !state.change,
                    warn: wn,
                    press: !state.press
                };

                save(nL)

                return nL;
            }
            break;

        case "ClearWarning":

            return {
                ...state,
                warn: false
            };


        case "DeleteLetter":

            let nD;

            if (!state.end) {
                let wn = false;
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

                if (activeGuess.indexOf('') === 0) {
                    wn = true;
                }


                const index = activeGuess.lastIndexOf(item);
                activeGuess[index] = '';


                newGuesses[state.try] = activeGuess

                nD={
                    ...state,
                    guesses: newGuesses,
                    change: !state.change,
                    warn: wn,
                    press: !state.press
                };

                save(nD);
                return nD;
            }
            break;


        default:
            save(state);
            return state;
    }

}

export default rootReducer;