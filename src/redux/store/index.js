import {createStore} from "redux";
import rootReducer from "../reducers/rootReducer";
import initState from "./initState";
import {load} from "../reducers/LocalStorage";

function configureStore (state=initState()){

    const gameState = localStorage.getItem('game-state');


    if(gameState){
        return createStore(rootReducer, load());
    }else{
        return createStore(rootReducer, state);
    }


}

export default configureStore;