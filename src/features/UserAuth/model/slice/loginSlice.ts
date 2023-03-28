import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { LoginType, ValidateErrors } from './../types/LoginType'
import { userAction } from 'entities/User'

const initialState: LoginType = {
    email: '',
    password: '',
    error: '',
    validateErrors: { email: '', password: '' },
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.email = action.payload
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        },
        setValidateErrors: (state, action: PayloadAction<ValidateErrors>) => {
            state.validateErrors = action.payload
        },
    },
})

export const { actions: loginActions } = loginSlice
export const { reducer: loginReducer } = loginSlice

export const logIn =
    (email: string, password: string) =>
    async (
        dispatch: (arg0: { payload: string; type: 'user/setAuthData' | 'login/setError' }) => void,
    ) => {
        try {
            dispatch(userAction.setAuthData(email))
        } catch (error) {
            dispatch(loginActions.setError('Ошибка запроса. Повторите позже.'))
        }
    }
