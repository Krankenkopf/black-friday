import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {Header} from "../../u1-header/Header";
import {Profile} from "./profile/Profile";
import {useSelector} from "react-redux";
import {TStore} from "../../../m2-bll/store";
import {TUserData} from "../../../m3-dal/auth-api";
import {PacksContainer} from "./packs/PacksContainer";
import { Cards } from "./cards/Cards";
import {Learning} from "./learning/Learning";


export const Main = () => {
    const userData = useSelector<TStore, TUserData | null>(state => state.auth.userData)
    if (userData === null) {
        return <Redirect to='/login'/>
    }
    return (
        <div>
            <Header />
            <div className="main">
                <div className="main__container _container">
                    <Switch>
                        <Route path={"/profile"} render={() => <Profile />}/>
                        <Route exact path={"/"} render={() => <Redirect to={"/profile"}/>}/>
                        <Route path={"/packs"} render={() => <PacksContainer />}/>
                        <Route path={"/cards/:packID"} render={() => <Cards />}/>
                        <Route path={"/learning/:packID"} render={() => <Learning />}/>
                        <Redirect from={"*"} to={"/404"}/>
                    </Switch>
                </div>
            </div>
        </div>
    )
}