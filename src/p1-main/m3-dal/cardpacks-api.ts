
import {instance} from "./api";
import {
    AddCardsPackRequestType, CardPackType,
    DeleteCardsPackRequestType, EditCardsPackRequestType,
    GetCardPacksRequestType
} from "../m2-bll/cardpacks-reducer";


export const cardpacksAPI = {
    getCardPacks(data: GetCardPacksRequestType) {
        return instance.get<TGetCardPacksResponse>(`cards/pack`, {params: {...data}})
    },
    addCardPack(data: AddCardsPackRequestType) {
        return instance.post<AddCardPackResponseType>(`cards/pack`, {...data}, {})
    },
    deleteCardPack(data: DeleteCardsPackRequestType) {
        return instance.delete<DeleteCardPackResponseType>(`cards/pack`, {params: {...data}})
    },
    editCardPack(data: EditCardsPackRequestType) {
        return instance.put<EditCardPackResponseType>(`cards/pack`, {...data}, {})
    }
}


export type TGetCardPacksResponse = {
    cardPacks: Array<CardPackType>
    page: number
    pageCount: number
    cardPacksTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    token: string
    tokenDeathTime: number
}
type AddCardPackResponseType = any
type DeleteCardPackResponseType = any
type EditCardPackResponseType = any