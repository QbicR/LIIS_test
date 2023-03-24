import { UserType } from './../types/userType'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { USER_AUTH_DATA } from 'shared/const/localStorage'

const initialState: UserType = {
    user: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<string>) => {
            state.user = action.payload
            localStorage.setItem(USER_AUTH_DATA, action.payload)
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(USER_AUTH_DATA)
            if (user) {
                state.user = user
            }
        },
        logOut: (state) => {
            state.user = ''
            localStorage.removeItem(USER_AUTH_DATA)
        },
    },
})

export const { actions: userAction } = userSlice
export const { reducer: userReducer } = userSlice
