function ScoreBar(props){

    return(
        <div className="score">
            <h3>{props.score}</h3>
            <div className="bar">
                <div className="fill" style={{width:(props.fill*100)+"%"}}></div>
            </div>
        </div>

    )
}

export default ScoreBar;