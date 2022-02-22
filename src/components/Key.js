import {useDispatch, useSelector} from "react-redux";
import {InputLetter} from "../redux/actions/InputLetter";
import {StyleLabels} from "../assets/StyleLabels";

function Key(props) {
    const guesses = useSelector(state => state.guesses);
    const answer = useSelector(state => state.answer);
    const cTry = useSelector(state => state.try);
    const guessed = useSelector(state => state.guessed);

    const dispatch = useDispatch();

    let style;
    let stop = false;

    if (guessed.includes(props.vl)) {
        if (answer.join('').includes(props.vl)) {
            for (let i = 0; i < cTry; i++) {
                if (!stop) {
                    if (guesses[i].lastIndexOf(props.vl) === answer.lastIndexOf(props.vl)||guesses[i].indexOf(props.vl) === answer.indexOf(props.vl)) {
                        style = StyleLabels.good;
                        stop = true;
                    } else {
                        style = StyleLabels.okay;
                    }
                }

            }

        } else {
            style = StyleLabels.bad;
        }
    }

    return (
        <div className={"key "+props.vl} style={style}
             onClick={() => dispatch(InputLetter(props.vl))}>{props.vl.toUpperCase()}</div>
    )
}

export default Key;