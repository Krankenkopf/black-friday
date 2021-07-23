
type TInitialState = typeof initialState
type TActions = any

let initialState = {}

const profileReducer = (state = initialState, action: TActions): TInitialState => {
   return state
}
export default profileReducer