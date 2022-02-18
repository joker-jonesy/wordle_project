import {createStore} from "redux";
import rootReducer from "../reducers/rootReducer";
import initState from "./initState";
import {load, score_save} from "../reducers/LocalStorage";

function configureStore (state=initState()){

    const gameState = localStorage.getItem('game-state');


    if(gameState){

        return createStore(rootReducer, load());
    }else{
        score_save({1:0,2:0,3:0,4:0,5:0,6:0,lose:0})
        return createStore(rootReducer, state);
    }


}

export default configureStore;