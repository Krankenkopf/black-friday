import React, {useEffect, useMemo, useState} from 'react'
import S from "./Cards.module.css";

import {NavLink, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {TStore} from "../../../../m2-bll/store";
import {
    addCard,
    AddCardRequestType,
    CardsStateType, CardType,
    getCards,
    setCurrentPage, setSearchValue,
    toggleUpdatedFlag
} from "../../../../m2-bll/cards-reducer";
import {setAppStatus, setNeedUpdate, TRequestStatus} from "../../../../m2-bll/app-reducer";
import {timeparser} from "../../../../../p2-utils/timeparser";
import Input from "../../../u0-common/c1-Input/Input";
import Button from "../../../u0-common/c2-Button/Button";
import Table from '../../../u0-common/c7-Table/Table';
import {Paginator} from "../../../u0-common/c8-Paginator/Paginator";
import {Preloader} from "../../../u0-common/c11-Preloader/Preloader";


export const Cards = () => {
    const dispatch = useDispatch()
    const appStatus = useSelector<TStore, TRequestStatus>(state => state.app.status)
    const needUpdate = useSelector<TStore, boolean>(state => state.app.needUpdate)

    const currentUserId = useSelector<TStore, string | undefined>(state => state.auth.userData?._id)
    const {
        cardsPack_id, cards, cardsTotalCount, cardQuestion, packUserId,
    } = useSelector<TStore, CardsStateType>((state) => state.cards)
    const currentPage = useSelector<TStore, number>((state) => state.cards.page)
    const cardsPerPage = useSelector<TStore, number>((state) => state.cards.pageCount)
    const lastUpdatedFlag = useSelector<TStore, '0grade' | '1grade'>((state) => state.cards.sortCards)

    const {packID} = useParams<{ packID: string }>()
    const [attemptID, setAttemptID] = useState<number | null>(null)

    useEffect(() => {
        if (needUpdate && appStatus !== 'loading') {
            dispatch(getCards())
            dispatch(setNeedUpdate(false))
        }
    }, [needUpdate, appStatus])
    const requestAttempt = () => {
        let id = setTimeout(async () => {
            dispatch(setAppStatus('loading'))
            await dispatch(getCards())
            setAttemptID(null)
        }, 500)
        setAttemptID(+id)
    }
    useEffect(() => {
        if (attemptID !== null && appStatus !== 'loading') {
            clearTimeout(attemptID)
            requestAttempt()
        } else if (appStatus !== 'loading') {
            requestAttempt()
        } else dispatch(setNeedUpdate(true))
    }, [currentPage, dispatch, cardQuestion, lastUpdatedFlag])

    const createNewCard = () => {
        const data: AddCardRequestType = {
            card: {
                cardsPack_id: cardsPack_id,
                question: 'Did I ever tell you the definition of insanity?',
                answer: 'Insanity is doing exact same thing over and over again expecting shit to change',
                type: "card"
            }
        }
        dispatch(addCard(data))
    }
    const handleSetCurrentPage = (page: number) => {
        dispatch(setCurrentPage(page))
    }
    const handleLastUpdated = () => {
        dispatch(toggleUpdatedFlag())
    }
    const setToSearch = (value: string) => {
        dispatch(setSearchValue(value))
    }

    const headerTitles: Array<string | React.ReactNode> = [
        'Question',
        'Answer',
        <span onClick={handleLastUpdated}>Last Updated {lastUpdatedFlag === "0grade" ? '▲' : '▼'}</span>,
        'Grade']

    const cellData: Array<[string, ...Array<React.ReactNode>]> = useMemo(() => cards.length > 0
        ? cards.map((c: CardType) => [
            c._id,
            c.question,
            c.answer,
            timeparser(c.updated),
            c.grade])
        : [['0', 'There is nothing here yet']]
        , [cards])
    const columnSchema = 'h1 h2 h3 h4'
    const columnWeights = ['10fr', '10fr', '5fr', '3fr',]
    return (
        <div className={"cards paperCard3"}>
            <div className={"cards__container"}>
                {appStatus === "loading" && <Preloader />}
                <div className={"cards__content"}>
                    <div className={"cards__content__block"}>
                        <span>
                             <NavLink to={"/packs"}>◄</NavLink>
                        </span>
                        <h3>Cards list</h3>
                    </div>
                    <div className={"cards__content__block"}>
                        <div className={S.cards__search}>
                            <Input onChangeText={setToSearch}/>
                            {packUserId === currentUserId && <Button onClick={createNewCard}>Add new pack</Button>}
                        </div>
                    </div>
                    <div className={"cards__content__block"}>
                        <Table cellData={cellData}
                               headerTitles={headerTitles}
                               columnSchema={columnSchema}
                               columnWeights={columnWeights}
                               cellMinHeight={'48px'}/>
                    </div>
                    <div className={"cards__content__block"}>
                        <div>
                            <Paginator currentPage={currentPage}
                                       itemsPerPage={cardsPerPage}
                                       itemsTotalCount={cardsTotalCount}
                                       setCurrentPage={handleSetCurrentPage}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}