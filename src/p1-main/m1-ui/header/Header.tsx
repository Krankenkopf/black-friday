import React from "react";
import S from "./Header.module.css";
import {Link} from "./link/Link";
import decksIcon from "../../../p4-assets/decks.svg";
import profileIcon from "../../../p4-assets/profileIcon.svg";

export const Header = () => {
    return (
        <div className={S.header_container}>
            <div className={S.nav_container}>
                <h2>It-incubator</h2>
                <nav>
                    <Link path={"/packs"} icon={decksIcon} title={"Packs List"}/>
                    <Link path={"/profile"} icon={profileIcon} title={"Profile"}/>
                </nav>
            </div>
        </div>
    )
}