import React from "react";
import {RecoveryPass} from "./RecoveryPass";
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
            password recovery link:	<a href='http://localhost:3000/#/new-password/$token$'>link</a>
            </div>`

    const formik = useFormik({
            initialValues: {
                email: "",
            },
            validate: (values) => {
                const errors: TPassRecoveryFormikError = {};
                if (!values.email) {
                    errors.email = "Email is required"
                } else if (values.email.length < 11) {
                    errors.email = "Email should be more 10 symbols"
                }
                return errors;
            },
            onSubmit: values => {
                dispatch(forgotPass({email: values.email, from: "kelek", message}))
            }
        }
    )

    return (
        <RecoveryPass
            errors={formik.errors}
            emailValue={formik.values.email}
            submit={formik.handleSubmit}
            status={status}
            changeHandler={formik.handleChange}
            isSand={isSend}
        />
    )
}