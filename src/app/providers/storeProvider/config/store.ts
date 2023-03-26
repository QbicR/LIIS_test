import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { sliderReducer } from 'entities/Slider'

import { userReducer } from 'entities/User'
import { hotelsReducer } from 'features/getHotelsData'
import { loginReducer } from 'features/UserAuth'
import { StateSchema } from './StateSchema'

export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        userData: userReducer,
        loginData: loginReducer,
        hotelsData: hotelsReducer,
        imagesData: sliderReducer,
    }

    return configureStore<StateSchema>({
        reducer: rootReducers,
        preloadedState: initialState,
    })
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
