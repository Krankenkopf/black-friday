import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert, {AlertProps} from '@material-ui/lab/Alert'
import {useDispatch, useSelector} from "react-redux";
import { TStore } from '../../../m2-bll/store';
import {setAppStatus} from "../../../m2-bll/app-reducer";

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />
}
type ErrorSnackbarPropsType = {
    error?: string
}
export const ErrorSnackbar: React.FC<ErrorSnackbarPropsType> = props => {
    const appError = useSelector<TStore, string | null>(state => state.app.error)
    const dispatch = useDispatch()

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return
        }
        dispatch(setAppStatus("idle"))
    }

    return (
        <Snackbar open={appError !== null || props.error !== null} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error">
                {appError || props.error}
            </Alert>
        </Snackbar>
    )
}
