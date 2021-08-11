import {AppThunk} from './store';
import {setAppStatus, setInitialized} from "./app-reducer";
import {handleServerNetworkError} from "../../p2-utils/errorHandler";
import {authAPI, TLoginData, TUserData} from "../m3-dal/auth-api";


const initialState = {
    userData: null as TUserData | null,
    isLoggedIn: false
}

export const authReducer = (state: TAuthState = initialState, action: TAuthActions): TAuthState => {
    switch (action.type) {
        case 'LOGIN/SET_USER_DATA':
            return {...state, userData: action.userData}
        case 'LOGIN/SET_IS_LOGGED_IN':
            return {...state, isLoggedIn: action.value}
        default: return state
    }
}

// actions

export const setUserData = (userData: TUserData | null) =>
    ({type: 'LOGIN/SET_USER_DATA', userData} as const)
export const setIsLoggedIn = (value: boolean) =>
    ({type: 'LOGIN/SET_IS_LOGGED_IN', value} as const)

// thunks

export const login = (data: TLoginData): AppThunk => async dispatch => {
    try {
        dispatch(setAppStatus('loading'))
        const response = await authAPI.login(data)
        dispatch(setUserData(response.data))
        dispatch(me())
        dispatch(setAppStatus('succeeded'))
    } catch (e) {
        handleServerNetworkError(e, dispatch)
    }
}

export const logout = (): AppThunk => async dispatch => {
    try {
        dispatch(setAppStatus('loading'))
        await authAPI.logout()
        dispatch(setIsLoggedIn(false))
        dispatch(setUserData(null))
        dispatch(setAppStatus('succeeded'))
    } catch (e) {
        handleServerNetworkError(e, dispatch)
    }
}

export const me = (): AppThunk => async dispatch => {
    try {
        dispatch(setAppStatus('loading'))
        const response = await authAPI.me()
        dispatch(setUserData(response.data))
        dispatch(setIsLoggedIn(true))
        dispatch(setInitialized())
        dispatch(setAppStatus('succeeded'))
    } catch (e) {
        handleServerNetworkError(e, dispatch)
        dispatch(setInitialized())
    }
}

// types



type TAuthState = typeof initialState
export type TAuthActions = ReturnType<typeof setUserData> | ReturnType<typeof setIsLoggedIn>