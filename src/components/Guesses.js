import {useSelector} from "react-redux";
import Guess from "./Guess";
import React from "react";


function Guesses(){

    let guesses = useSelector(state=>state.guesses);

    const [gs,setGs]=React.useState(guesses);

    React.useEffect(()=>{
        setGs(guesses)
    },[guesses])


    let g_eles = gs.map((g,i)=>
        <Guess key={i} vl={g} idx={i}/>
    )

    return (
        <div className={"guesses"}>
            {g_eles}
        </div>
    )
}

export default Guesses;