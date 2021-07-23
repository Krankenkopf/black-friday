import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import profileReducer from "./profile-reducer";
import appReducer from "./app-reducer";
import authReducer from "./auth-reducer";
import {passRecoveryReducer} from "./pass-recovery-reducer";

const rootReducer = combineReducers({
    app: appReducer,
    profile: profileReducer,
    auth: authReducer,
    passRecovery: passRecoveryReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type TState = ReturnType<typeof rootReducer>