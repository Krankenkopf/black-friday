import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {useFormik} from 'formik';
import {NavLink, Redirect} from 'react-router-dom';
import CircularProgress from "@material-ui/core/CircularProgress";
import {TStore} from "../../../../m2-bll/store";
import {TRequestStatus} from "../../../../m2-bll/app-reducer";
import {setRegistrationStatus} from "../../../../m2-bll/signup-reducer";
import {Checkbox} from "../../../u0-common/c3-Checkbox/Checkbox";
import {login} from "../../../../m2-bll/auth-reducer";
import Button from "../../../u0-common/c2-Button/Button";
import { CTextField } from "../../../u0-common/c10-TextField/CTextField";

type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

export const Login = () => {
    const isLoggedIn = useSelector<TStore, boolean>((state) => state.auth.isLoggedIn)
    const status = useSelector<TStore, TRequestStatus>(state => state.app.status)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setRegistrationStatus(false))
    }, [])

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Email is required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.password) {
                errors.password = 'Password is required';
            } else if (values.password.length < 8) {
                errors.password = 'Must be 8 characters or less';
            }
            return errors;
        },
        onSubmit: values => {
            dispatch(login(values))
            formik.resetForm();
        },
    })

    if (isLoggedIn) {
        return <Redirect to={'/profile'}/>
    }

    return (
            <>
                <h2 className="title">KranK.westchnz</h2>
                <h3 className="title">Sign In</h3>
                <form onSubmit={formik.handleSubmit} className="auth__signin__form" autoComplete='off'>
                    <div className="auth__signin__fields">
                        <CTextField
                            helperText={formik.touched.email ? formik.errors.email : null}
                            variant="standard"
                            label={"Email"}
                            {...formik.getFieldProps('email')}
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
                            variant="standard"
                            label={"Password"}
                            helperText={formik.touched.password ? formik.errors.password : null}
                            {...formik.getFieldProps('password')}
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
                        <div className="auth__forgot">
                            <NavLink to='/recovery'>Forgot Password</NavLink>
                        </div>

                    </div>
                    <div className="auth__checkbox">
                        <Checkbox {...formik.getFieldProps('rememberMe')}>Remember Me</Checkbox>
                    </div>
                    <div className="auth__button">
                        {status === "loading"
                            ? <CircularProgress/>
                            : <Button type={'submit'} ok>Login</Button>
                        }
                    </div>
                </form>
                <div className="auth__altBlock">
                    <div>Don't have an account?</div>
                    <NavLink to="/signup"><span>Sign Up</span></NavLink>
                </div>
            </>
    )
}
