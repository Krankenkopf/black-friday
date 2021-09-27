import React, {CSSProperties, FC} from 'react'
import S from "./Packs.module.css";
import {TRequestStatus} from "../../../../m2-bll/app-reducer";
import Button from "../../../u0-common/c2-Button/Button";
import avadefault from "../../../../../p4-assets/avadefault.png";
import star from "../../../../../p4-assets/star.png";
import {TUserData} from "../../../../m3-dal/auth-api";
import {DoubleRange} from "../../../u0-common/c5-DoubleRange/DoubleRange";

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
    const buttonStyle: CSSProperties = {
        minWidth: '55px',
        fontSize: '15px',
        marginRight: '25px',
    }
    const buttonBgStyle = {backgroundColor: 'rgba(255, 0, 0, 0.3)',}

    return (
        <div className={"packs__sidebar"}>
            <div className={"packs__sidebar__block"}>
                <h3>Packs List</h3>
            </div>
            <div className={"packs__sidebar__block"}>
                <div className="packs__avatar">
                    <img src={userData.avatar || avadefault} alt='avatar'/>
                    <div title={`You have ${userData.publicCardPacksCount} card(s)`} className="packs__avatar__score">
                        <span>{userData.publicCardPacksCount}</span>
                        <img src={star} alt='score'/>
                    </div>
                </div>
            </div>
            <div className={"packs__sidebar__block"}>
                <div className={S.filters__title}>Show packs cards</div>
                <div>
                    <Button style={showOwnMode ? {...buttonStyle, ...buttonBgStyle} : buttonStyle}
                            variant={showOwnMode ? "active" : undefined}
                            onClick={handleToggleShowOwnMode}>My</Button>
                    <Button style={showOwnMode ? buttonStyle : {...buttonStyle, ...buttonBgStyle}}
                            variant={showOwnMode ? undefined : "active"}
                            onClick={handleToggleShowOwnMode}>All</Button>
                </div>
            </div>
            <div className={"packs__sidebar__block"}>
                <div className={S.filters__title}>Numbers of cards</div>
                <div style={{padding: '20px 10px 0'}}>
                    <DoubleRange value={rangeValues}
                                 onChangeRange={handleSetRangeValues}
                                 min={minCardsCount}
                                 max={maxCardsCount}/>
                </div>

            </div>
        </div>
    )
}