import React, {FC, useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {NavLink, Redirect, useParams } from 'react-router-dom'
import cloth1 from "../../../../../p4-assets/clothes/card1.png"
import cloth2 from "../../../../../p4-assets/clothes/card2.png"
import cloth3 from "../../../../../p4-assets/clothes/card3.png"
import cloth4 from "../../../../../p4-assets/clothes/card4.png"
import cloth5 from "../../../../../p4-assets/clothes/card5.png"
import cloth6 from "../../../../../p4-assets/clothes/card6.png"
import { TRequestStatus } from '../../../../m2-bll/app-reducer'
import {CardsStateType, getCards, setCardsPackID, setPaginationOffset } from '../../../../m2-bll/cards-reducer'
import { TStore } from '../../../../m2-bll/store'
import { Preloader } from '../../../u0-common/c11-Preloader/Preloader'
import Button from "../../../u0-common/c2-Button/Button";

type TLearningProps = {

}
export const Learning: FC<TLearningProps> = () => {
    const {
        cardsPack_id, cards, cardsTotalCount,
    } = useSelector<TStore, CardsStateType>((state) => state.cards)
    const {packID} = useParams<{ packID: string }>()
    const appStatus = useSelector<TStore, TRequestStatus>(state => state.app.status)
    const [answerVisibility, toggleVisibility] = useState(false)
    const [variant, setVariant] = useState(() => Math.ceil(Math.random()*6))
    const [changing, setChanging] = useState(false)
    const [animOut, setStatus] = useState(false)
    const [[question, answer], setPair] = useState(['',''])
    const chooseCloth = () => {
        switch (variant) {
            case 1: return cloth1
            case 2: return cloth2
            case 3: return cloth3
            case 4: return cloth4
            case 5: return cloth5
            case 6: return cloth6
        }
    }
    const cloth = chooseCloth()
    const dispatch = useDispatch()
    const chooseRandomPair = () => {
        if (cards.length > 0) {
            const i = Math.ceil(Math.random()*cardsTotalCount)
            setPair([cards[i].question, cards[i].answer])
        }
    }
    useEffect(() => {
        chooseRandomPair()
    }, [cards])
    useEffect(() => {
        if (cardsPack_id !== packID) {
            dispatch(setCardsPackID(packID))
        }
        dispatch(setPaginationOffset(100))
        dispatch(getCards())
    }, [packID, dispatch])
    useEffect(() => {
        if (changing) {
            setStatus(true)
            setTimeout(() => {
                chooseRandomPair()
                setStatus(false)
                setVariant(Math.ceil(Math.random()*6))
                setChanging(false)
                toggleVisibility(false)
            }, 1000)
        }
    }, [changing])
    const revealCard = () => answerVisibility ? undefined : toggleVisibility(true)
    const gradesData = [
        {title: "Dunno", grade: 1},
        {title: "Heard", grade: 2},
        {title: "Forgot", grade: 3},
        {title: "Understand", grade: 4},
        {title: "Clean", grade: 5}
    ]
    const grades = gradesData.map((rp, i) => {
        return <div key={i}>
            <Button variant={"ok"}
                    onClick={() => {}}
            >{rp.title}</Button>
        </div>
    })

    return (
        <div className={"learning"}>
            {appStatus === "loading"
                ? <Preloader />
                : <>
                    <div className={`learning__question ${animOut ? "out" : "in"}`}>
                        <div
                            className={"utils__cardEdge _1"}> </div>
                        <div
                            className={"utils__cardEdge _2"}> </div>
                        <div
                            className={"utils__rotating _card _3"}>
                            <img src={cloth} className={"learning__question__cloth shadowed"} alt={'card'}/>
                        </div>
                        <div
                            className="utils__rotating _card paperCard3 _4">
                            <div className="cardContainer">{question}</div>
                        </div>
                    </div>
                    <div className={"learning__panel"}>
                        <div style={{transform: `translateY(${answerVisibility || animOut ? '0' : '-1000px'})`}}  className={"learning__panel__extra"}>
                            <div className={`learning__gradeBox paperCard1 ${answerVisibility&&!animOut ? "_in" : ''} ${animOut ? "_out" : ''}`}>
                                <div className={"learning__gradeBox__container"}>
                                    <h4>Did you know it?</h4>
                                    {grades}
                                </div>
                            </div>
                            {!changing && <Button style={{opacity: `${answerVisibility ? '1' : '0'}`,}}
                                                  backgroundImage
                                                  onClick={() => setChanging(true)}>Next!</Button>}
                        </div>
                        <div>
                            <NavLink to={"/packs"}><Button backgroundImage>Exit</Button></NavLink>
                        </div>
                    </div>
                    <div className={`learning__answer ${animOut ? "out" : "in"}`} onClick={revealCard}>
                        <div style={{transform: `rotateY(${answerVisibility ? 183 : 3}deg)`, left: '1px'}}
                             className={"utils__cardEdge"}> </div>
                        <div style={{transform: `rotateY(${answerVisibility ? -3 : -183}deg)`, right: '1px'}}
                             className={"utils__cardEdge"}> </div>
                        <div style={{transform: `rotateY(${answerVisibility ? 180 : 0}deg)`}}
                             className={"utils__rotating _card"}>
                            <img src={cloth} className={"learning__answer__cloth shadowed"} alt={'card'}/>
                        </div>
                        <div style={{transform: `rotateY(${answerVisibility ? 0 : -180}deg)`}}
                             className="utils__rotating _card paperCard3">
                            <div className="cardContainer">{answer}</div>
                        </div>
                    </div>
                </>}

        </div>
    )
}