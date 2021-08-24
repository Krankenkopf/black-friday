import React from "react";
import {PassRecovery} from "./PassRecovery";
import {useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import { TStore } from "../../../../m2-bll/store";
import {TRequestStatus} from "../../../../m2-bll/app-reducer";
import {forgotPass} from "../../../../m2-bll/pass-recovery-reducer";


export type TPassRecoveryFormikError = {
    email?: string
}

export const PassRecoveryContainer = () => {
    const status = useSelector<TStore, TRequestStatus>(state => state.app.status)
    const isSend = useSelector<TStore, boolean>(state => state.passRecovery.messageIsSend)
    const dispatch = useDispatch()

    const message = `<div style="background-color: lime; padding: 15px">
            To recover your password go to <a href='http://localhost:3000/#/new-password/$token$'>this link</a>
            </div>`

    const formik = useFormik({
            initialValues: {
                email: "",
            },
            validate: (values) => {
                const errors: TPassRecoveryFormikError = {};
                if (!values.email) {
                    errors.email = "Email is required"
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                    errors.email = 'Invalid email address.';
                }
                return errors;
            },
            onSubmit: values => {
                dispatch(forgotPass({email: values.email, from: "KranK.westchnz Learning Hub", message}))
            }
        }
    )

    return (
        <PassRecovery
            errors={formik.errors}
            emailValue={formik.values.email}
            submit={formik.handleSubmit}
            status={status}
            changeHandler={formik.handleChange}
            isSand={isSend}
        />
    )
}