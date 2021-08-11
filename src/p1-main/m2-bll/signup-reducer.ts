import {AppThunk} from "./store";
import {setAppStatus} from "./app-reducer";
import {TSignupFormData} from "../m1-ui/views/auth/signup/Signup";
import {signupAPI} from "../m3-dal/signup-api";
import {handleServerNetworkError} from "../../p2-utils/errorHandler";

const initialState = {
    register: false
}

export const signupReducer = (state: TSignupState = initialState, action: TSignupActions): TSignupState => {
    switch (action.type) {
        case 'REGISTRATION/SET-STATUS':
            return {...state, register: action.status}
        default:
            return state
    }
}

// actions
export const setRegistrationStatus = (status: boolean) =>
    ({type: 'REGISTRATION/SET-STATUS', status} as const)

// thunks
export const signup = (formData: TSignupFormData): AppThunk => async dispatch => {
    try {
        dispatch(setAppStatus('loading'))
        await signupAPI.signup(formData)
        dispatch(setRegistrationStatus(true))
        dispatch(setAppStatus('succeeded'))
    }
    catch (e) {
       handleServerNetworkError(e, dispatch)
    }
}
// types
type TSignupState = typeof initialState
export type TSignupActions = ReturnType<typeof setRegistrationStatus>