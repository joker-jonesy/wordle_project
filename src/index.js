import React from 'react';
import ReactDOM from 'react-dom';
import './less/index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Provider} from "react-redux";
import configureStore from "./redux/store";
import Main from "./Main";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={configureStore()}>
            <Routes>
                <Route path={"/"}  element={<App/>}>
                    <Route index element={<Main/>}/>
                </Route>
            </Routes>
        </Provider>
    </BrowserRouter>

    ,
    document.getElementById('root')
);

