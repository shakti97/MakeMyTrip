import {createStore,applyMiddleware} from 'redux';
import {Reducer} from "../Reducer/reducer";
import {thunk} from "redux-thunk";
import { middleware } from '../Components/Categories';
import promiseMiddleware from "redux-promise-middleware"


export const store = createStore(Reducer,{},applyMiddleware(promiseMiddleware()));

store.subscribe(()=>{
    console.log("store changed",store.getState());
})

