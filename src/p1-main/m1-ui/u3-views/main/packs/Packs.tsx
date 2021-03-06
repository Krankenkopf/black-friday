import React, {FC, useState} from 'react'
import {CardPacksTableActionsType} from "./PacksContainer";
import {useSelector} from "react-redux";
import {CircularProgress} from "@material-ui/core";
import {CardPackType} from "../../../../m2-bll/cardpacks-reducer";
import {TStore} from "../../../../m2-bll/store";
import {Sidebar} from "./Sidebar";
import {Content} from "./Content";
import {TRequestStatus} from '../../../../m2-bll/app-reducer';
import {TUserData} from "../../../../m3-dal/auth-api";
import {Preloader} from "../../../u0-common/c11-Preloader/Preloader";

type PacksPropsType = {
    appStatus: TRequestStatus
    userData: TUserData
    rangeValues: [number, number]
    rawData: Array<CardPackType>
    lastUpdatedFlag: string
    currentPage: number
    cardsPerPage: number
    cardPacksTotalCount: number
    minCardsCount: number
    maxCardsCount: number
    showOwnMode: boolean
    sendToSearch: (value: string) => void
    createNewCardsPack: () => void
    handleSetRangeValues: ([min, max]: Array<number>) => void
    handleToggleShowOwnMode: () => void
    handleTableAction: (id: string, action: CardPacksTableActionsType) => void
    handleLastUpdated: () => void
    setCurrentPage: (page: number) => void
}

export const Packs: FC<PacksPropsType> = (props) => {
    const {
        appStatus,
        userData,
        rangeValues,
        rawData,
        lastUpdatedFlag,
        currentPage,
        cardsPerPage,
        cardPacksTotalCount,
        minCardsCount,
        maxCardsCount,
        showOwnMode,
        sendToSearch,
        createNewCardsPack,
        handleToggleShowOwnMode,
        handleSetRangeValues,
        handleTableAction,
        handleLastUpdated,
        setCurrentPage
    } = props
    const [addMode, toggleAddMode] = useState(false)
    const currentUserId = useSelector<TStore, string | undefined>(state => state.auth.userData?._id)

    return ( // TODO: add backgroundColor styles to embedded components while loading, exclude bgc from preloader
        <div className={"packs paperCard3"}>
            <div className={"packs__container"}>
                {appStatus === "loading" && <Preloader />}
                {addMode ? <div></div> : null}
                <Sidebar appStatus={appStatus}
                         userData={userData}
                         showOwnMode={showOwnMode}
                         rangeValues={rangeValues}
                         minCardsCount={minCardsCount}
                         maxCardsCount={maxCardsCount}
                         handleSetRangeValues={handleSetRangeValues}
                         handleToggleShowOwnMode={handleToggleShowOwnMode}/>

                <Content rawData={rawData}
                         currentUserId={currentUserId}
                         lastUpdatedFlag={lastUpdatedFlag}
                         currentPage={currentPage}
                         cardsPerPage={cardsPerPage}
                         cardPacksTotalCount={cardPacksTotalCount}
                         setCurrentPage={setCurrentPage}
                         sendToSearch={sendToSearch}
                         handleLastUpdated={handleLastUpdated}
                         handleTableAction={handleTableAction}
                         createNewCardsPack={createNewCardsPack}/>
            </div>
        </div>
    )
}
