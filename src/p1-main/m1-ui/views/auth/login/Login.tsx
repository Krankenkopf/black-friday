import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {useFormik} from 'formik';
import {NavLink, Redirect} from 'react-router-dom';
import s from './Login.module.css'
import Sc from '../common/CommonStyles.module.css'
import CircularProgress from "@material-ui/core/CircularProgress";
import {TStore} from "../../../../m2-bll/store";
import {TRequestStatus} from "../../../../m2-bll/app-reducer";
import {setRegistrationStatus} from "../../../../m2-bll/signup-reducer";
import {ButtonAlt} from "../../../common/c2-Button/ButtonAlt";
import {Checkbox} from "../../../common/c3-Checkbox/Checkbox";
import {InputAlt} from "../../../common/c1-Input/InputAlt";
import {login} from "../../../../m2-bll/auth-reducer";

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
        <div className={Sc.page_container}>
            <div className={Sc.form_container}>
                <h3>IT - Incubator</h3>
                <h4>Sing In</h4>
                <form onSubmit={formik.handleSubmit}>
                    <div className={Sc.fields}>
                        <InputAlt
                            variant="light"
                            placeholder={"Email"}
                            error={formik.touched.email ? formik.errors.email : null}
                            {...formik.getFieldProps('email')}
                            style={{minWidth: "300px"}}
                        />
                        <InputAlt
                            type="password"
                            variant="light"
                            placeholder={"Password"}
                            error={formik.touched.password ? formik.errors.password : null}
                            {...formik.getFieldProps('password')}
                            style={{minWidth: "300px"}}
                        />
                        <NavLink className={s.forgot} to='/recovery'>Forgot Password</NavLink>
                    </div>
                    <div className={s.checkbox}>
                        <Checkbox {...formik.getFieldProps('rememberMe')}>Remember Me</Checkbox>
                    </div>
                    <div className={Sc.button_box}>
                        {status === "loading"
                            ? <CircularProgress/>
                            : <ButtonAlt className={s.button} type={'submit'} variant='purple'>Login</ButtonAlt>
                        }
                    </div>
                </form>
                <div className={Sc.link_box}>
                    <span className={Sc.title}>Don't have an account?</span>
                    <NavLink to="/signup"><span className={Sc.link}>Sign Up</span></NavLink>
                </div>
            </div>
        </div>
    )
}