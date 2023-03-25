import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { getHotelsData } from '../services/getHotelsData'
import { HotelsType } from '../types/HotelsType'

const initialState: HotelsType = {
    location: 'Москва',
    date: new Date().toISOString().slice(0, 10),
    days: '1',
    hotels: [],
    isLoading: false,
    error: '',
}

export const hotelsSlice = createSlice({
    name: 'hotels',
    initialState,
    reducers: {
        setLocation: (state, action: PayloadAction<string>) => {
            state.location = action.payload
        },
        setDate: (state, action: PayloadAction<string>) => {
            state.date = action.payload
        },
        setDays: (state, action: PayloadAction<string>) => {
            state.days = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getHotelsData.pending, (state) => {
            state.isLoading = true
            state.error = ''
        })
        builder.addCase(getHotelsData.fulfilled, (state, action) => {
            state.isLoading = false
            state.hotels = action.payload
            state.error = ''
        })
        builder.addCase(getHotelsData.rejected, (state, action: any) => {
            state.isLoading = true
            state.error = action.payload
        })
    },
})

export const { actions: hotelsActions } = hotelsSlice
export const { reducer: hotelsReducer } = hotelsSlice
