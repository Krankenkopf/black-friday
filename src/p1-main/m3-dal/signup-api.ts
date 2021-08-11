import axios from "axios";
import {TSignupFormData} from "../m1-ui/views/auth/signup/Signup";

const instanse = axios.create({
    baseURL: "https://neko-back.herokuapp.com/2.0/",
    withCredentials: true
})

export type AuthRegisterResponseType = {
    addedUser: any
    error?: string
}

export const signupAPI = {
    signup({email, password}: TSignupFormData) {
        return (
            instanse.post<AuthRegisterResponseType>(`auth/register`, {email, password})
        )
    },
}