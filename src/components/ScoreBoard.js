import {score_load} from "../redux/reducers/LocalStorage";
import React from "react";
import {useSelector} from "react-redux";
function ScoreBoard(){

    const [scr,setScr]=React.useState(score_load())
    const end = useSelector(state=>state.end);

    React.useEffect(()=>{
        let newScores = score_load();
        setScr(newScores);

    }, [end])




    return(
        <div className="scores">
            <h3>1: {scr[1]}</h3>
            <h3>2: {scr[2]}</h3>
            <h3>3: {scr[3]}</h3>
            <h3>4: {scr[4]}</h3>
            <h3>5: {scr[5]}</h3>
            <h3>6: {scr[6]}</h3>
            <h3>Loss: {scr.lose}</h3>
        </div>
    )
}

export default ScoreBoard;