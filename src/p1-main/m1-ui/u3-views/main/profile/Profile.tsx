import React from 'react';
import {useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {TStore} from "../../../../m2-bll/store";
import {TUserData} from "../../../../m3-dal/auth-api";
import avadefault from "../../../../../p4-assets/avadefault.png"
import star from "../../../../../p4-assets/star.png"

export const Profile = () => {
    const userData = useSelector<TStore, TUserData | null>(state => state.auth.userData)
    if (userData === null) {
        return <Redirect to='/login'/>
    }

    return (
        <div className="profile">
            <div className="profile__container">
                <div className="profile__card paperCard2">
                    <div className="profile__avatar">
                        <img src={userData.avatar || avadefault} alt='avatar'/>
                        <div title={`You have ${1} card`} className="profile__score">
                            <span>1</span>
                            <img src={star} alt='score'/>
                        </div>
                    </div>
                    <div>
                        <h4>{userData.name}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}