import React, {useCallback} from "react";
import Button from "../u0-common/c2-Button/Button";
import {logout} from "../../m2-bll/auth-reducer";
import {useDispatch} from "react-redux";
import {NavLink} from "react-router-dom";

export const Header = () => {
    const dispatch = useDispatch()
    const logoutHandler = useCallback(() => {
        dispatch(logout())
    }, [dispatch])
    return (
        <div className="header">
            <div className="header__container _container">
                <div className="header__text headerElement paperCard1">
                    <h2>KranK.westchnz</h2>
                </div>
                <nav className="header__nav">
                    <div className="headerElement paperCard1">
                        <NavLink to={"/packs"} className="header__text">
                            <div>
                                <h3>To K.westchnz!</h3>
                            </div>
                        </NavLink>
                    </div>
                </nav>

                <div>
                    <Button onClick={logoutHandler} backgroundImage>Logout</Button>
                </div>
            </div>
        </div>
    )
}