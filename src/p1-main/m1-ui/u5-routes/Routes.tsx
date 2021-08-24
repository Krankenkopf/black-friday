import React from "react";
import {Route, Switch} from "react-router-dom";
import Test from "../u3-views/test/Test";
import {Error404} from "../u3-views/notFound/Error404";
import {Main} from "../u3-views/main/Main";
import {AuthRoutes} from "../u3-views/auth/AuthRoutes";


export const Routes = () => {
    return (
        <>
            <Switch>
                <Route path={["/login", "/signup", "/recovery", "/new-password"]} render={() => <AuthRoutes/>}/>
                <Route path={"/sand-box"} render={() => <Test/>}/>
                <Route path={"/404"} render={() => <Error404/>}/>
                <Route path={"/"} render={() => <Main />}/>
            </Switch>
        </>
    )
}