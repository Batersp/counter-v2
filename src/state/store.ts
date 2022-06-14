import {combineReducers, legacy_createStore as createStore} from "redux";
import {countReducer} from "./count-reducer";

const rootReducer = combineReducers({
    count: countReducer,
})


export const store = createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>