import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import {profileReducer, TProfileActions} from "./profile-reducer";
import {appReducer, TAppActions} from "./app-reducer";
import {authReducer, TAuthActions} from "./auth-reducer";
import {passRecoveryReducer, TPassRecoveryActions} from "./pass-recovery-reducer";
import {signupReducer, TSignupActions} from "./signup-reducer";
import {cardpacksReducer} from "./cardpacks-reducer";
import {cardsReducer} from "./cards-reducer";

const rootReducer = combineReducers({
    app: appReducer,
    profile: profileReducer,
    auth: authReducer,
    passRecovery: passRecoveryReducer,
    signup: signupReducer,
    cardpacks: cardpacksReducer,
    cards: cardsReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

// types
export type TStore = ReturnType<typeof rootReducer>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, TStore, unknown, TActions>
export type TActions =
    TProfileActions
    | TAuthActions
    | TSignupActions
    | TPassRecoveryActions
    | TAppActions

//@ts-ignore
window.store = store