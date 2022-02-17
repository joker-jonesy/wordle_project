export const load = function (){
    return JSON.parse(localStorage["game-state"]);
};

export const save = function(obj) {
    localStorage["game-state"] = JSON.stringify(obj);
};