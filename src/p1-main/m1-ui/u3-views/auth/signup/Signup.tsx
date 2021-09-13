import React from "react";
import {useFormik} from 'formik';
import {useDispatch, useSelector} from "react-redux";
import {NavLink, Redirect} from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import {TStore} from "../../../../m2-bll/store";
import {TRequestStatus} from "../../../../m2-bll/app-reducer";
import {signup} from "../../../../m2-bll/signup-reducer";
import {CTextField} from "../../../u0-common/c10-TextField/CTextField";
import Button from "../../../u0-common/c2-Button/Button";


type SignupFormErrorType = {
    email?: string
    password?: string
    confirmedPassword?: string
}

export type TSignupFormData = {
    email: string
    password: string
}

export const Signup = () => {
    const status = useSelector<TStore, TRequestStatus>(state => state.app.status)
    const register = useSelector<TStore, boolean>(state => state.signup.register)
    const dispatch = useDispatch()

    const signupForm = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmedPassword: '',
        },
        validate: (formData) => {
            const errors: SignupFormErrorType = {};
            if (!formData.email) {
                errors.email = 'Email is required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
                errors.email = 'Invalid email address.';
            }
            if (!formData.password) {
                errors.password = 'Password is required'
            } else if (formData.password.length < 8) {
                errors.password = 'Password must be at least 8 symbols'
            }
            if (formData.password && !formData.confirmedPassword) {
                errors.confirmedPassword = 'Confirm your password'
            } else if (formData.password !== formData.confirmedPassword) {
                errors.confirmedPassword = 'You entered two different passwords.'
            }
            return errors;
        },
        onSubmit: values => {
            if(values.password === values.confirmedPassword) {
                dispatch(signup({email: values.email, password: values.password}))
                signupForm.resetForm()
            }
        },
    })

    if (register) {
        return <Redirect to={'/login'}/>
    }
    return (
            <>
                <h2 className="title">KranK.westchnz</h2>
                <h3 className="title">Sign Up</h3>
                <form onSubmit={signupForm.handleSubmit} className="auth__signup__form" autoComplete={'off'}>
                    <div className="auth__signup__fields">
                        <CTextField
                            helperText={signupForm.touched.email ? signupForm.errors.email : null}
                            {...signupForm.getFieldProps('email')}
                            variant="standard"
                            label={"Email"}
                            className="field"
                            InputProps={{
                                style: {
                                    fontFamily: 'inherit',
                                }
                            }}
                            InputLabelProps={{
                                style: {
                                    fontFamily: 'inherit',
                                    fontSize: '20px',
                                    color: '#000'
                                } }}
                        />
                        <CTextField
                            type="password"
                            helperText={signupForm.touched.password ? signupForm.errors.password : null}
                            {...signupForm.getFieldProps('password')}
                            variant="standard"
                            label={"Password"}
                            className="field"
                            InputProps={{
                                style: {
                                    letterSpacing: '0.2em',
                                }
                            }}
                            InputLabelProps={{
                                style: {
                                    fontFamily: 'inherit',
                                    fontSize: '20px',
                                    color: '#000'
                                } }}
                        />
                        <CTextField
                            type="password"
                            helperText={signupForm.touched.confirmedPassword ? signupForm.errors.confirmedPassword : null}
                            {...signupForm.getFieldProps('confirmedPassword')}
                            variant="standard"
                            label={"Confirm password"}
                            className="field"
                            InputProps={{
                                style: {
                                    letterSpacing: '0.2em',
                                }
                            }}
                            InputLabelProps={{
                                style: {
                                    fontFamily: 'inherit',
                                    fontSize: '20px',
                                    color: '#000'
                                } }}
                        />
                    </div>
                    {status === "loading"
                        ? <CircularProgress/>
                        : <div className="auth__signup__buttonsBlock">
                            <NavLink to={'/login'}><Button variant={'cancel'}>Cancel</Button></NavLink>
                            <div><Button type={'submit'} variant={'ok'}>Sign Up</Button></div>
                        </div>
                    }
                </form>
            </>
    )
}