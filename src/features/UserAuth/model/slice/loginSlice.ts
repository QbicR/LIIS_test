import { LoginType } from './../types/LoginType'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { userAction } from 'entities/User'

const initialState: LoginType = {
    username: '',
    password: '',
    error: '',
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        },
        setError: (state, action: PayloadAction<string>) => {
            state.username = action.payload
        },
    },
})

export const { actions: loginActions } = loginSlice
export const { reducer: loginReducer } = loginSlice

export const logIn = (username: string) => async (dispatch: any) => {
    try {
        dispatch(userAction.setAuthData(username))
    } catch (error) {
        dispatch(loginActions.setError('Ошибка запроса. Повторите позже.'))
    }
}
