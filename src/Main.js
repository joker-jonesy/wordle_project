import Guesses from "./components/Guesses";
import Keys from "./components/Keys";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {SubmitGuess} from "./redux/actions/SubmitGuess";
import {DeleteLetter} from "./redux/actions/DeleteLetter";
import {InputLetter} from "./redux/actions/InputLetter";
const enter_keys=['Enter', 13];
const back_keys=['Backspace', 8];

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

function Main(){
    const dispatch=useDispatch();
    const win = useSelector(state=>state.win);
    const end = useSelector(state=>state.end);
    const handler = ({ key }) => {
        if('abcdefghijklmnopqrstuvwxyz'.split('').includes(key)){
            dispatch(InputLetter(key))
        }else if(enter_keys.includes(key)){
            dispatch(SubmitGuess())
        }else if(back_keys){
            dispatch(DeleteLetter())
        }


    };

    useEventListener("keydown", handler);

    return(
        <div className="contain">
            <Guesses/>
            <Keys/>
            {win&&<h1>You Win!!</h1>}
            {end&&!win?<h1>You Lose</h1>:""}
        </div>
    )
}

export default Main;