import React, {FC} from 'react'
import S from "./Packs.module.css";
import {TRequestStatus} from "../../../../m2-bll/app-reducer";
import Button from "../../../u0-common/c2-Button/Button";
import avadefault from "../../../../../p4-assets/avadefault.png";
import star from "../../../../../p4-assets/star.png";
import {TUserData} from "../../../../m3-dal/auth-api";

type FiltersPropsType = {
    appStatus: TRequestStatus
    userData: TUserData
    showOwnMode: boolean
    rangeValues: [number, number]
    minCardsCount: number
    maxCardsCount: number
    handleSetRangeValues: ([min, max]: Array<number>) => void
    handleToggleShowOwnMode: () => void
}
export const Sidebar: FC<FiltersPropsType> = ({
                                                  appStatus,
                                                  userData,
                                                  showOwnMode,
                                                  rangeValues,
                                                  minCardsCount,
                                                  maxCardsCount,
                                                  handleSetRangeValues,
                                                  handleToggleShowOwnMode,
                                              }) => {
    return (
        <div className={"packs__sidebar"}>
            <div className={S.filters__block}>
                <h3>Packs List</h3>
            </div>
            <div className={S.filters__block}>
                <div className="packs__avatar">
                    <img src={userData.avatar || avadefault} alt='avatar'/>
                    <div title={`You have ${userData.publicCardPacksCount} card(s)`} className="packs__avatar__score">
                        <span>{userData.publicCardPacksCount}</span>
                        <img src={star} alt='score'/>
                    </div>
                </div>
            </div>
            <div className={S.filters__block}>
                <div className={S.filters__title}>Show packs cards</div>
                <div>
                    <Button onClick={handleToggleShowOwnMode}>My</Button>
                    <Button onClick={handleToggleShowOwnMode}>All</Button>
                </div>
            </div>
            <div className={S.filters__block}>
                <div className={S.filters__title}>Numbers of cards</div>
                {/*  <MyDoubleRange value={rangeValues}
                               onChangeRange={handleSetRangeValues}
                               min={minCardsCount}
                               max={maxCardsCount}/>*/}
            </div>
        </div>
    )
}