import React, {useCallback} from 'react';
import S from './Profile.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {TStore} from "../../../../m2-bll/store";
import {TUserData} from "../../../../m3-dal/auth-api";
import {logout} from "../../../../m2-bll/auth-reducer";
import {ButtonAlt} from "../../../common/c2-Button/ButtonAlt";

type ProfilePropsType = {}

export const Profile: React.FC<ProfilePropsType> = props => {
    const userData = useSelector<TStore, TUserData | null>(state => state.auth.userData)
    const dispatch = useDispatch()

    const logoutHandler = useCallback(() => {
        dispatch(logout())
    }, [dispatch])

    if (userData === null) {
        return <Redirect to='/login'/>
    }

    return (
        <div className={S.profile}>
            <div className={S.profileWrap}>
                <h4>Profile page!</h4>
                <div className={S.avatar}>
                    <img src={userData.avatar || ""} alt='avatar'/>
                </div>
                <div className={S.name}>
                    <p>{userData.name}</p>
                </div>
                <div>
                    <ButtonAlt className={S.button} onClick={logoutHandler}>Logout</ButtonAlt>
                </div>
            </div>
        </div>
    )
}