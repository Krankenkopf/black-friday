
const initialState = {}

type TInitialState = typeof initialState

const appReducer = (state=initialState, action: any): TInitialState => {
    return state
}

export default appReducer