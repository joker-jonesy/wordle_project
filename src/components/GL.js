import {useSelector} from "react-redux";

function GL(props) {

    const cTry = useSelector(state => state.try);
    const guesses = useSelector(state => state.guesses);
    const answer = useSelector(state => state.answer);

    const currentGuess = guesses[props.gi];
    let style;

    if (cTry !== 0 && props.gi < cTry) {
        if (answer.join('').includes(currentGuess[props.idx])) {
            if (answer.indexOf(currentGuess[props.idx]) === currentGuess.indexOf(props.vl)) {
                if (currentGuess.join().split(props.vl).length - 1 > 1) {
                    let indicesAnswer = [];
                    for (let i = 0; i < answer.length; i++) {
                        if (answer[i] === props.vl) indicesAnswer.push(i);
                    }

                    if (indicesAnswer.find(itm=>itm===props.idx)===props.idx) {
                        style = {
                            color: "white",
                            backgroundColor: "green"
                        }
                    } else {
                        style = {
                            color: "white",
                            backgroundColor: "black"
                        }
                    }

                } else {

                    style = {
                        color: "white",
                        backgroundColor: "green"
                    }
                }

            } else {
                style = {
                    color: "black",
                    backgroundColor: "yellow"
                }
            }
        } else {
            style = {
                color: "white",
                backgroundColor: "black"
            }
        }
    }


    return (
        <div className={"gl"} style={style}>
            {props.vl}
        </div>
    )
}

export default GL;