import React, {useEffect} from 'react';
import {HashRouter} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Routes } from './m1-ui/u5-routes/Routes';
import {TStore} from "./m2-bll/store";
import {TRequestStatus} from "./m2-bll/app-reducer";
import {me} from "./m2-bll/auth-reducer";
import {ErrorSnackbar} from "./m1-ui/u0-common/c9-Snackbar/ErrorSnackbar";
import "../p3-styles/style.scss"

export const App = () => {
    const status = useSelector<TStore, TRequestStatus>(state => state.app.status)
    const isInitialized = useSelector<TStore, boolean>(state => state.app.isInitialized)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(me())
    }, [dispatch])

    if (!isInitialized) {
        return <div
            style={{position: 'fixed', top: '50%', textAlign: 'center', width: '100%'}}>
            <CircularProgress/>
        </div>
    }
    return (
        <div className="wrapper">
            {status === "failed" && <ErrorSnackbar/>}
            <HashRouter>
                <Routes />
            </HashRouter>
        </div>
    )
}