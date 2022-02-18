import Key from "./Key";
import {useDispatch} from "react-redux";
import {DeleteLetter} from "../redux/actions/DeleteLetter";
import {SubmitGuess} from "../redux/actions/SubmitGuess";
function Keys(){

    const keys = 'qwertyuiopasdfghjklzxcvbnm'.split("");
    const dispatch=useDispatch()

    let key_eles = keys.map((k,i)=>
        <Key key={i} vl={k}/>
    )

    return (
        <div className={"keys"}>
            {key_eles}
            <div className="key submit" onClick={()=>dispatch(SubmitGuess())}>Enter</div>
            <div className="key delete" onClick={()=>dispatch(DeleteLetter())}>Delete</div>
            <div className="key test" onClick={()=>dispatch(SubmitGuess())}>Test</div>
        </div>
    )
}

export default Keys;