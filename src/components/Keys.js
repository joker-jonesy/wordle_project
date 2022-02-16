import Key from "./Key";
import {useDispatch} from "react-redux";
import {DeleteLetter} from "../redux/actions/DeleteLetter";
import {SubmitGuess} from "../redux/actions/SubmitGuess";
function Keys(){

    const keys = 'abcdefghijklmnopqrstuvwxyz'.split("");
    const dispatch=useDispatch()

    let key_eles = keys.map((k,i)=>
        <Key key={i} vl={k}/>
    )

    return (
        <div className={"keys"}>
            {key_eles}
            <div className="key" onClick={()=>dispatch(SubmitGuess())}>Submit</div>
            <div className="key" onClick={()=>dispatch(DeleteLetter())}>Delete</div>
        </div>
    )
}

export default Keys;