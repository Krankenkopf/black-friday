import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {Login} from "../views/auth/login/Login";
import Test from "../views/test/Test";
import {Error404} from "../views/notFound/Error404";
import {Main} from "../views/main/Main";
import {NewPassContainer} from "../views/auth/newPass/NewPassContainer";
import {PassRecoveryContainer} from "../views/auth/passRecovery/RecoveryContainer";
import {Signup} from "../views/auth/signup/Signup";


export const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path={"/login"} render={() => <Login/>}/>
                <Route path={"/signup"} render={() => <Signup/>}/>
                <Route path={"/recovery"} render={() => <PassRecoveryContainer />}/>
                <Route path={"/new-password"} render={() => <NewPassContainer/>}/>
                <Route path={"/sand-box"} render={() => <Test/>}/>
                <Route path={"/404"} render={() => <Error404/>}/>
                <Route path={"/"} render={() => <Main />}/>
                <Redirect from={"*"} to={"/404"}/>
            </Switch>
        </div>
    )
}