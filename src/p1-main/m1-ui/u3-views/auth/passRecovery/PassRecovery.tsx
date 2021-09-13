import React, {ChangeEventHandler, FocusEventHandler} from "react";
import S from "./RecoveryPass.module.css"
import CircularProgress from "@material-ui/core/CircularProgress";
import {NavLink} from "react-router-dom";
import {TPassRecoveryFormikError} from "./PassRecoveryContainer";
import message from "./message.svg"
import {TRequestStatus} from "../../../../m2-bll/app-reducer";
import {CTextField} from "../../../u0-common/c10-TextField/CTextField";
import Button from "../../../u0-common/c2-Button/Button";

type TRecoveryPassProps = {
    submit: FocusEventHandler<HTMLFormElement>
    changeHandler: ChangeEventHandler<HTMLInputElement>
    emailValue: string
    status: TRequestStatus
    errors: TPassRecoveryFormikError
    isSand: boolean
}

export const PassRecovery: React.FC<TRecoveryPassProps> = React.memo(props => {
    const {submit, emailValue, changeHandler, status, errors, isSand} = props

    return (
        <>
            <h2 className="title">KranK.westchnz</h2>
                {!isSand
                    ? <>
                        <h3 className="title">Recovery password</h3>
                        <div className="text">
                            Enter your email and we will send you further instructions
                        </div>
                        <form onSubmit={submit} className="auth__recovery__form">
                            <div className="auth__fields">
                                <CTextField
                                    name={'email'}
                                    onChange={changeHandler}
                                    helperText={errors.email ? errors.email : null}
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
                            </div>
                            <div className="auth__button">
                                {status === "loading"
                                    ? <CircularProgress/>
                                    : <Button type="submit" variant={'ok'}>Send</Button>
                                }
                            </div>
                        </form>
                        <div className="auth__altBlock">
                            <span>Did you remember your password?</span>
                            <NavLink to="/login"><span>Try logging in</span></NavLink>
                        </div>
                    </>
                    : <Message email={emailValue}/>
                }
        </>
    )
})

type MessagePropsType = {
    email: string
}

const Message = (props: MessagePropsType) => {
    return (
        <div>
            <img src={message} alt="message"/>
            <h4>Check your Email</h4>
            <span className={S.instruction}>
                We’ve sent an Email with instructions to {props.email}
            </span>
        </div>
    )
}