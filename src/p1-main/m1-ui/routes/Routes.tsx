import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import Login from "../views/login/Login";
import MainPage from "../views/main/MainPage";
import Profile from "../views/profile/Profile";
import {SignUp} from "../views/signup/Signup";
import PassRecovery from "../views/passRecovery/PassRecovery";
import {NewPass} from "../views/passRecovery/NewPass";
import {Error404} from "../views/notFound/Error404";
import Test from "../views/test/Test";


export const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path={"/"} render={() => <Redirect to={"/main"}/>}/>
                <Route path={"/main"} render={() => <MainPage/>}/>
                <Route path={"/profile"} render={() => <Profile/>}/>
                <Route path={"/login"} render={() => <Login/>}/>
                <Route path={"/signup"} render={() => <SignUp/>}/>
                <Route path={"/password_recovery"} render={() => <PassRecovery/>}/>
                <Route path={"/enter_new_password"} render={() => <NewPass/>}/>
                <Route path={"/not_found"} render={() => <Error404/>}/>
                <Route path={"/test"} render={() => <Test/>}/>
                <Redirect from={"*"} to={"/not_found"}/>
            </Switch>
        </div>
    )
}