import {Dispatch} from "redux"
import {setAppStatus, setError, TAppActions} from "../p1-main/m2-bll/app-reducer";


export const handleServerNetworkError = (e: any, dispatch: ErrorUtilsDispatchType) => {
    const error = e.response ? e.response.data.error : (e.message + ', more details in the console');
    dispatch(setError(error))
    dispatch(setAppStatus("failed"))
    console.log('Error: ', {...e})
}

type ErrorUtilsDispatchType = Dispatch<TAppActions>