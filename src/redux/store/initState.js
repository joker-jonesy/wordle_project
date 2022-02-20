
let randomWords = require('random-words');
function initState(){


    let theWord;

    theWord=randomWords({exactly: 1, minLength: 5,maxLength: 5})
    while(theWord[0].split("").length!==5){
        theWord=randomWords({exactly: 1, minLength: 5,maxLength: 5})
    }
    // theWord=["froggy"]

    let guesses=[];
    for(let i=0; i<6; i++){
        let guess=[];
        for(let ii=0; ii<theWord[0].split("").length; ii++){
            guess.push('');
        }
        guesses.push(guess);
    }

    return {
        try:0,
        guesses:guesses,
        answer:theWord[0].split(""),
        guessed:"",
        change:false,
        end:false,
        win:false,
        warn:false,
        press:false,
        help:true
    }
}

export default initState;