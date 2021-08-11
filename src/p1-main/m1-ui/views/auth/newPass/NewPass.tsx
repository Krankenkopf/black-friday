import React, {ChangeEventHandler, FocusEventHandler} from "react";
import S from "./NewPass.module.css"
import Sc from '../common/CommonStyles.module.css'
import CircularProgress from "@material-ui/core/CircularProgress";
import {NavLink} from "react-router-dom";
import {NewPassFormikErrorType} from "./NewPassContainer";
import { TRequestStatus } from "../../../../m2-bll/app-reducer";
import {ButtonAlt} from "../../../common/c2-Button/ButtonAlt";
import {ErrorSnackbar} from "../../../common/c9-Snackbar/ErrorSnackbar";
import {createField} from "../../../../../p2-utils/createField";

type NewPassPropsType = {
    submit: FocusEventHandler<HTMLFormElement>
    changeHandler: ChangeEventHandler<HTMLInputElement>
    passwordValue: string
    status: TRequestStatus
    errors: NewPassFormikErrorType
}

export const NewPass: React.FC<NewPassPropsType> = React.memo(props => {
    const {submit, passwordValue, changeHandler, status, errors} = props
    return (
        <div className={Sc.page_container}>
            <div className={Sc.form_container}>
                <h3>It-incubator</h3>
                <h4>Create new password</h4>
                <form onSubmit={submit}>
                    <div className={Sc.fields}>
                        {createField("password", passwordValue, errors.password, changeHandler, "light", "Password", "password")}
                    </div>
                    <span className={S.instruction}>
                        Create new password and we will send you further instructions to email
                    </span>
                    <div className={S.button_box}>
                        {status === "loading"
                            ? <CircularProgress/>
                            : <ButtonAlt variant="purple" type="submit">Create new password</ButtonAlt>
                        }
                    </div>
                </form>
                <div className={Sc.link_box}>
                    <span className={Sc.title}>Did you remember your password?</span>
                    <NavLink to="/login"><span className={Sc.link}>Try logging in</span></NavLink>
                </div>
            </div>
            {errors.token && <ErrorSnackbar error={errors.token}/>}
        </div>
    )
})