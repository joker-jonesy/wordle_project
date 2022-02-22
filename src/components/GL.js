import {useSelector} from "react-redux";
import {StyleLabels} from "../assets/StyleLabels";

function GL(props) {

    const cTry = useSelector(state => state.try);
    const guesses = useSelector(state => state.guesses);
    const answer = useSelector(state => state.answer);
    // const guessed=useSelector(state=>state.guessed);

    const currentGuess = guesses[props.gi];
    let style;

    let indicesAnswer = [];
    let chrCountAnswer = [];
    for (let i = 0; i < answer.length; i++) {
        if (answer[i] === props.vl) {
            indicesAnswer.push(i);
            chrCountAnswer.push(props.vl)
        }
    }

    if (cTry !== 0 && props.gi < cTry) {
        if (answer.join('').includes(currentGuess[props.idx])) {
            if (currentGuess.filter((x) => x === props.vl).length > 1) {

                if(indicesAnswer.includes(props.idx)){
                    style = StyleLabels.good;
                }else{
                    style = StyleLabels.bad;
                }
            } else {
                if (answer.indexOf(currentGuess[props.idx]) === currentGuess.indexOf(props.vl)) {
                    style = StyleLabels.good;
                } else {
                    style = StyleLabels.okay;
                }
            }

        } else {
            style = StyleLabels.bad;
        }
    }

    let flipped = cTry !== 0 && props.gi < cTry ? "flipped": "";
    let delay = (props.idx+1)*1000
    delay=delay.toString()

    console.log(delay)


    return (
        <div className={"gl "+flipped} >
            <div className={"flipper d"+props.idx}>
                <div className="front">{props.vl}</div>
                <div className="back" style={style}>{props.vl}</div>
            </div>
        </div>
    )
}

export default GL;