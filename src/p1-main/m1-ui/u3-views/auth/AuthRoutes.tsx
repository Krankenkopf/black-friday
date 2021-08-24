import React from "react";
import {Route, Switch} from 'react-router-dom';
import {Signup} from "./signup/Signup";
import {PassRecoveryContainer} from "./passRecovery/PassRecoveryContainer";
import {NewPassContainer} from "./newPass/NewPassContainer";
import {Login} from "./login/Login";


export const AuthRoutes = () => {

    return (
        <div className="auth">
            <div className="auth__container paperCard1">
                <Switch>
                    <Route path={"/login"} render={() => <Login/>}/>
                    <Route path={"/signup"} render={() => <Signup/>}/>
                    <Route path={"/recovery"} render={() => <PassRecoveryContainer />}/>
                    <Route path={"/new-password"} render={() => <NewPassContainer/>}/>
                </Switch>
            </div>
        </div>
    )
}