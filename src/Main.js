import Guesses from "./components/Guesses";
import Keys from "./components/Keys";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {SubmitGuess} from "./redux/actions/SubmitGuess";
import {DeleteLetter} from "./redux/actions/DeleteLetter";
import {InputLetter} from "./redux/actions/InputLetter";
import {NewGame} from "./redux/actions/NewGame";
import ScoreBoard from "./components/ScoreBoard";


const enter_keys = ['Enter'];
const back_keys = ['Backspace', 8];

const useEventListener = (eventName, handler, element = window) => {
    const savedHandler = React.useRef();

    React.useEffect(() => {
        savedHandler.current = handler;
    }, [handler]);

    React.useEffect(() => {
        const eventListener = (event) => savedHandler.current(event);
        element.addEventListener(eventName, eventListener);
        return () => {
            element.removeEventListener(eventName, eventListener);
        };
    }, [eventName, element]);
}

function Main() {
    const dispatch = useDispatch();
    const win = useSelector(state => state.win);
    const end = useSelector(state => state.end);
    const answer = useSelector(state => state.answer);

    const handler = ({key}) => {
        if ('abcdefghijklmnopqrstuvwxyz'.split('').includes(key)) {
            dispatch(InputLetter(key))
        }
        else if (enter_keys.includes(key)) {
            dispatch(SubmitGuess())
        }
        else if (back_keys.includes(key)) {
            dispatch(DeleteLetter())
        }
    };

    useEventListener("keydown", handler);

    let color;

    if(win){
        color="green"
    }else{
        color="red";
    }

    const create_new_game=()=>{
        dispatch(NewGame())
    }



    return (
        <div className="contain">
            <h1>Guess the Word!</h1>
            <Guesses/>
            <Keys/>
            {end && <div className="message">
                <div className="tab" style={{backgroundColor: color}}>
                    {win && <h1>You Win!!</h1>}
                    {end && !win ? <h1>You Lose. The Answer was {answer.join('')}</h1> : ""}
                    <ScoreBoard/>
                    <h2 onClick={create_new_game}>Play Again?</h2>
                </div>
            </div>}

        </div>
    )
}

export default Main;