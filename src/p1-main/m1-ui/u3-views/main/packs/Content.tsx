import React, {FC} from 'react'
import S from "./Packs.module.css";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Delete from "@material-ui/icons/Delete";
import Edit from "@material-ui/icons/Edit";
import {NavLink} from "react-router-dom";
import ArrowForward from "@material-ui/icons/ArrowForward";
import {CardPackType} from "../../../../m2-bll/cardpacks-reducer";
import {CardPacksTableActionsType} from "./PacksContainer";
import { timeparser } from '../../../../../p2-utils/timeparser';
import Input from "../../../u0-common/c1-Input/Input";
import Button from "../../../u0-common/c2-Button/Button";
import Table from "../../../u0-common/c7-Table/Table";
import {Paginator} from "../../../u0-common/c8-Paginator/Paginator";

type ContentPropsType = {
    rawData: Array<CardPackType>
    currentUserId?: string
    lastUpdatedFlag: string
    currentPage: number
    cardsPerPage: number
    cardPacksTotalCount: number
    sendToSearch: (value: string) => void
    createNewCardsPack: () => void
    handleTableAction: (id: string, action: CardPacksTableActionsType) => void
    handleLastUpdated: () => void
    setCurrentPage: (page: number) => void

}
export const Content: FC<ContentPropsType> = (props) => {
    const {rawData, currentUserId, lastUpdatedFlag,
        currentPage, cardsPerPage, cardPacksTotalCount,
        sendToSearch, createNewCardsPack, handleTableAction,
        handleLastUpdated, setCurrentPage} = props
    const headerTitles: Array<string | React.ReactNode> = [
        'Name',
        'Cards',
        <span onClick={handleLastUpdated}>Last Updated {lastUpdatedFlag === 'newest' ? '▲' : '▼'}</span>,
        'Created by',
        'Actions']
    const cellData = rawData.length > 0
        ? rawData.map((el: CardPackType) => [
        el.name,
        el.cardsCount,
        timeparser(el.updated),
        el.user_name,
        currentUserId === el.user_id
            ? <IconButton onClick={() => handleTableAction(el._id, 'delete')}><Delete/></IconButton>
            : null,
        currentUserId === el.user_id
            ? <IconButton onClick={() => handleTableAction(el._id, 'edit')}><Edit/></IconButton>
            : null,
        <NavLink to={'/cards/' + el._id}>
            <IconButton onClick={() => handleTableAction(el._id, 'learn')}><ArrowForward/></IconButton>
        </NavLink>
        ,])
        : [['There is nothing here yet']]
    const columnSchema = 'h1 h2 h3 h4 h5 h5 h5'
    const columnWeights = ['16fr', '4fr', '8fr', '10fr', '2fr', '2fr', '2fr',]
    return (
        <div className={S.packs__container}>
            <div className={S.packs__block}>
                <div className={S.packs__search}>
                    <Input onChangeText={sendToSearch}/>
                    <Button onClick={createNewCardsPack}>Add new pack</Button>
                </div>
            </div>
            <div className={S.packs__block}>
                <Table cellData={cellData}
                         headerTitles={headerTitles}
                         columnSchema={columnSchema}
                         columnWeights={columnWeights}
                         tableMaxHeight={'400px'}
                         cellMinHeight={'48px'}/>
            </div>
            <div className={S.packs__block}>
                <div>
                    <Paginator currentPage={currentPage}
                               itemsPerPage={cardsPerPage}
                               itemsTotalCount={cardPacksTotalCount}
                               setCurrentPage={setCurrentPage}/>
                </div>
               {/* <div><MySelect options={['10', '20', '30']}> </MySelect></div>*/}
            </div>
        </div>
    )
}