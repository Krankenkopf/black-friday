import {instance} from "./api";
import {TForgotPassRequest, TPassRecoveryRequest} from "../m2-bll/pass-recovery-reducer";


export const authAPI = {
    login(data: TLoginData) {
        return instance.post<LoginResponseType>('/auth/login', data)
    },
    me() {
        return instance.post<LoginResponseType>('/auth/me', {})
    },
    logout() {
        return instance.delete<LogoutResponseType>('/auth/me', {})
    },
    forgot(data: TForgotPassRequest) {
        return instance.post<ResponseType>(`/auth/forgot`, data)
    },
    recoveryPass(data: TPassRecoveryRequest) {
        return instance.post<ResponseType>(`/auth/set-new-password`, data)
    }
}

type ResponseType = {
    info?: string
    error?: string
}
export type TLoginData = {
    email: string
    password: string
    rememberMe: boolean
}

export type TUserData = {
    _id: string
    email: string
    name: string
    avatar?: string
    publicCardPacksCount: number
}

type LoginResponseType = TUserData & {
    error?: string
}

type LogoutResponseType = {
    info?: string
    error?: string
}