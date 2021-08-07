import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {pokemoReducer} from "./pokemon-reducer";
import thunkMiddleware from "redux-thunk"


let reducers = combineReducers({
    pokemoPage: pokemoReducer,

});


type RootReducerType = typeof reducers

export type AppStateType = ReturnType<RootReducerType>


export  type actionsType<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never


// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

// @ts-ignore
window.__store__ = store
export default store;