import GL from "./GL";

function Guess(props){

    let gl_eles = props.vl.map((l,i)=>
        <GL key={i} vl={l} idx={i} gi={props.idx}/>
    )

    return (
        <div className={"guess"}>
            {gl_eles}
        </div>
    )
}

export default Guess;