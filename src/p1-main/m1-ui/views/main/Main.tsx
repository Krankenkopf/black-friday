import React from "react";
import S from "./Main.module.css"
import {Redirect, Route} from "react-router-dom";
import {Header} from "../../header/Header";
import {Profile} from "./profile/Profile";
import {useSelector} from "react-redux";
import {TStore} from "../../../m2-bll/store";
import {TUserData} from "../../../m3-dal/auth-api";


export const Main = () => {
    const userData = useSelector<TStore, TUserData | null>(state => state.auth.userData)
    if (userData === null) {
        return <Redirect to='/login'/>
    }
    return (
        <div className={S.main}>
            <Header />
            <div className={S.content}>
                <Route exact path={"/"} render={() => <Redirect to={"/profile"}/>}/>
                <Route path={"/profile"} render={() => <Profile />}/>
            </div>
        </div>
    )
}