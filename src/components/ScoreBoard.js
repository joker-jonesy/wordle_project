import {score_load} from "../redux/reducers/LocalStorage";
import React from "react";
import ScoreBar from "./ScoreBar";
function ScoreBoard(){

    const [scores,setScores]=React.useState([]);
    const [ts,setTS]=React.useState(0);

    React.useEffect(()=>{
        let newScores = score_load();
        let scoreList=[];
        for(let i in newScores){
            scoreList.push([i,newScores[i]])
        }
        setScores(scoreList)
        let totalTries=0
        for(let ii in scores){
            totalTries=totalTries+scores[ii][1]
        }
        setTS(totalTries)

    }, [])

    let eles = scores.map((it,i)=>
        <ScoreBar key={i} score={it[0]} fill={it[1]/ts}/>
    )

    return(
        <div className="scores">
            {eles}
        </div>
    )
}

export default ScoreBoard;