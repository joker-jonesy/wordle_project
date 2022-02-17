import {useDispatch,useSelector} from "react-redux";
import {InputLetter} from "../redux/actions/InputLetter";

function Key(props){
    const guesses=useSelector(state=>state.guesses);
    const answer=useSelector(state=>state.answer);
    const cTry= useSelector(state=>state.try);
    const guessed=useSelector(state=>state.guessed);

    const dispatch=useDispatch();

    let style;
    let stop=false;

    if(guessed.includes(props.vl)){
        if(answer.join('').includes(props.vl)){
            for(let i=0; i<cTry; i++){
                if(!stop){
                    if(guesses[i].indexOf(props.vl)===answer.join('').indexOf(props.vl)){
                        style={
                            color:"white",
                            backgroundColor:"green"
                        }
                        stop=true;
                    }else{
                        style={
                            color:"black",
                            backgroundColor:"yellow"
                        }
                        stop=true;
                    }
                }

            }

        }else{
            style={
                color:"white",
                backgroundColor:"black"
            }
        }
    }

    return (
        <div className={"key"} style={style} onClick={()=>dispatch(InputLetter(props.vl))}>{props.vl.toUpperCase()}</div>
    )
}

export default Key;