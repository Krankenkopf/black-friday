import React, {useEffect, useState} from 'react'
import {Packs} from "./Packs";
import {useDispatch, useSelector} from "react-redux";
import {TStore} from "../../../../m2-bll/store";
import {
    addCardsPack,
    AddCardsPackRequestType,
    CardPacksStateType,
    CardPackType, deleteCardsPack, editCardsPack,
    getCardPacks, setCurrentPage,
    setRangeValues,
    setSearchValue, toggleShowOwnMode,
    toggleUpdatedFlag
} from "../../../../m2-bll/cardpacks-reducer";
import {setAppStatus, setNeedUpdate, TRequestStatus} from "../../../../m2-bll/app-reducer";
import {setCardsPackID} from "../../../../m2-bll/cards-reducer";
import {TUserData} from "../../../../m3-dal/auth-api";
import {Redirect} from "react-router-dom";


export type CardPacksTableActionsType = 'delete' | 'edit' | 'learn'
export const PacksContainer = () => {
    const dispatch = useDispatch()
    const appStatus = useSelector<TStore, TRequestStatus>(state => state.app.status)
    const needUpdate = useSelector<TStore, boolean>(state => state.app.needUpdate)
    const userData = useSelector<TStore, TUserData | null>(state => state.auth.userData)

    const packsData = useSelector<TStore, Array<CardPackType>>((state) => state.cardpacks.cardPacks)
    const currentPage = useSelector<TStore, number>((state) => state.cardpacks.page)
    const lastUpdatedFlag = useSelector<TStore, string>((state) => state.cardpacks.sortUpdated)

    const {pageCount,
        cardPacksTotalCount,
        maxCardsCount,
        minCardsCount,
        packName,
        filterMin,
        filterMax,
        showOwnMode} = useSelector<TStore, CardPacksStateType>((state) => state.cardpacks)

    useEffect(() => {
        dispatch(setRangeValues(minCardsCount, maxCardsCount))
    }, [minCardsCount, maxCardsCount])
    const [attemptID, setAttemptID] = useState<number | null>(null)
    useEffect(() => {
        if (needUpdate && appStatus !== 'loading') {
            dispatch(getCardPacks())
            dispatch(setNeedUpdate(false))
        }
    }, [needUpdate, appStatus])
    const requestAttempt = () => {
        let id = setTimeout(async () => {
            dispatch(setAppStatus('loading'))
            await dispatch(getCardPacks())
            setAttemptID(null)
        }, 500)
        setAttemptID(+id)
    }
    useEffect(() => {
        if (attemptID !== null && appStatus !== 'loading') {
            clearTimeout(attemptID)
            requestAttempt()
        }
        else if (appStatus !== 'loading') {
            requestAttempt()
        }
        else dispatch(setNeedUpdate(true))
    }, [currentPage, showOwnMode, dispatch, filterMin, filterMax, packName, lastUpdatedFlag])
    const handleLastUpdated = () => {
        dispatch(toggleUpdatedFlag())
    }
    const setToSearch = (value: string) => {
        dispatch(setSearchValue(value))
    }
    const createNewCardsPack = () => {
        const data: AddCardsPackRequestType = {
            cardsPack: {
                name: 'No Hope, No Fate',
                private: false,
                type: "pack"
            }
        }
        dispatch(addCardsPack(data))
    }
    const handleTableAction = (id: string, action: CardPacksTableActionsType) => {
        switch (action) {
            case "learn":  dispatch(setCardsPackID(id))
                return;
            case "delete": dispatch(deleteCardsPack({id: id}))
                return;
            case "edit": dispatch(editCardsPack({cardsPack: {_id: id, name: 'edited',}})) // TODO: temporary functionality!
                return;
            default: return
        }
    }
    const handleToggleShowOwnMode = () => {
        dispatch(toggleShowOwnMode())
    }
    const handleSetRangeValues = ([min, max]: Array<number>) => {
        dispatch(setRangeValues(min, max))
    }
    const handleSetCurrentPage = (page: number) => {
        dispatch(setCurrentPage(page))
    }
    if (userData === null) {
        return <Redirect to='/login'/>
    }
    return (
        <Packs appStatus={appStatus}
               rangeValues={[filterMin, filterMax]}
               rawData={packsData}
               lastUpdatedFlag={lastUpdatedFlag}
               currentPage={currentPage}
               cardsPerPage={pageCount}
               cardPacksTotalCount={cardPacksTotalCount}
               minCardsCount={minCardsCount}
               maxCardsCount={maxCardsCount}
               userData={userData}
               showOwnMode={showOwnMode}
               sendToSearch={setToSearch}
               createNewCardsPack={createNewCardsPack}
               setCurrentPage={handleSetCurrentPage}
               handleToggleShowOwnMode={handleToggleShowOwnMode}
               handleSetRangeValues={handleSetRangeValues}
               handleTableAction={handleTableAction}
               handleLastUpdated={handleLastUpdated}/>
    )
}