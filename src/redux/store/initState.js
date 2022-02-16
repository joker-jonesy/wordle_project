let randomWords = require('random-words');

let theWord;

theWord=randomWords({exactly: 1, minLength: 5,maxLength: 5})

let guesses=[];
for(let i=0; i<6; i++){
    let guess=[];
    for(let ii=0; ii<theWord[0].split("").length; ii++){
        guess.push('');
    }
    guesses.push(guess);
}


export const initState={
    try:0,
    guesses:guesses,
    answer:theWord[0].split(""),
    guessed:"",
    change:false,
    end:false,
    win:false
}