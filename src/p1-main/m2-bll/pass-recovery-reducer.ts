import {AppThunk} from "./store";
import {setAppStatus, setError} from "./app-reducer";
import {authAPI} from "../m3-dal/auth-api";
import {handleServerNetworkError} from "../../p2-utils/errorHandler";


const initialState = {
    messageIsSend: false,
    passIsRecovered: false
}

export const passRecoveryReducer = (state: TRecoveryPassState = initialState, action: TPassRecoveryActions): TRecoveryPassState => {
    switch (action.type) {
        case recoveryActionVariables.SET_SEND_MESSAGE:
            return {...state, messageIsSend: action.status}
        case recoveryActionVariables.SET_PASS_RECOVERY:
            return {...state, passIsRecovered: action.status}
        default: return state
    }
}

// actions
export const setStatusSendingMessage = (status: boolean) => ({type: recoveryActionVariables.SET_SEND_MESSAGE, status})
export const setStatusPassRecovery = (status: boolean) => ({type: recoveryActionVariables.SET_PASS_RECOVERY, status})
export const forgotPass = (data: TForgotPassRequest): AppThunk => async dispatch => {
    try {
        dispatch(setAppStatus("loading"))
        await authAPI.forgot(data)
        dispatch(setStatusSendingMessage(true))
        dispatch(setError(""))
        dispatch(setAppStatus("succeeded"))
    } catch (e) {
        handleServerNetworkError(e, dispatch)
    }
}
export const recovery = (data: TPassRecoveryRequest): AppThunk => async dispatch => {
    try {
        dispatch(setAppStatus("loading"))
        await authAPI.recoveryPass(data)
        dispatch(setStatusPassRecovery(true))
        dispatch(setStatusSendingMessage(false))
        dispatch(setError(""))
        dispatch(setAppStatus("succeeded"))
    } catch (e) {
        handleServerNetworkError(e, dispatch)
    }
}
// types
export type TPassRecoveryRequest = {
    password: string
    resetPasswordToken: string
}
export type TForgotPassRequest = {
    email: string
    from: string
    message: string
}
export type TRecoveryPassState = typeof initialState
export type TPassRecoveryActions =
    ReturnType<typeof setStatusSendingMessage>
    | ReturnType<typeof setStatusPassRecovery>

// variables
const recoveryActionVariables = {
    SET_SEND_MESSAGE: "RECOVERY/SET-STATUS-SEND-MESSAGE",
    SET_PASS_RECOVERY: "RECOVERY/SET-STATUS-PASS-RECOVERY",
}