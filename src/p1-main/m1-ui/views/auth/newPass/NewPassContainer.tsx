import React from "react";
import {NewPass} from "./NewPass";
import {useDispatch, useSelector} from "react-redux";
import {useFormik} from "formik";
import {Redirect} from "react-router-dom";
import { TStore } from "../../../../m2-bll/store";
import { TRequestStatus } from "../../../../m2-bll/app-reducer";
import { recovery } from "../../../../m2-bll/pass-recovery-reducer";

export type NewPassFormikErrorType = {
    password?: string
    token?: string
}

export const NewPassContainer = () => {
    const status = useSelector<TStore, TRequestStatus>(state => state.app.status)
    const isRecovered = useSelector<TStore, boolean>(state => state.passRecovery.passIsRecovered)
    const dispatch = useDispatch()


    const formik = useFormik({
            initialValues: {
                password: "",
                token: ""
            },
            validate: (values) => {
                const errors: NewPassFormikErrorType = {};
                if (!values.password) {
                    errors.password = "Password is required"
                } else if (values.password.length < 8) {
                    errors.password = "Password should be more 7 symbols"
                } /*else if(values.token === "") {
                    errors.token = "Recovery token is required"
                }*/
                return errors;
            },
            onSubmit: values => {
                if(window.location.hash === "#/new-password") {
                    values.token = ""
                    formik.errors.token = "Recovery token is required"
                } else {
                    values.token = window.location.hash.replace("#/new-password/", "")
                    dispatch(recovery({password: values.password, resetPasswordToken: values.token}))
                }
                formik.resetForm()
            }
        }
    )

    if(isRecovered) {
        return <Redirect to="/login" />
    }
    return (
        <NewPass
            submit={formik.handleSubmit}
            changeHandler={formik.handleChange}
            passwordValue={formik.values.password}
            status={status}
            errors={formik.errors}
        />
    )
}