import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { getHotelsData } from '../services/getHotelsData'
import { HotelsType, RequestDataType } from '../types/HotelsType'

const initialState: HotelsType = {
    location: 'Москва',
    date: new Date().toISOString().slice(0, 10),
    days: '1',
    hotels: [],
    isLoading: false,
    error: '',
    requestData: { location: '', date: '', days: '' },
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
        setRequestData: (state, action: PayloadAction<RequestDataType>) => {
            state.requestData = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getHotelsData.pending, (state) => {
            state.isLoading = true
            state.error = ''
        })
        builder.addCase(getHotelsData.fulfilled, (state, action: any) => {
            if (action.payload.errorCode === 2) {
                alert('Город не найден.')
                state.error = 'Город не найден.'
            } else {
                state.isLoading = false
                state.hotels = action.payload
                state.error = ''
            }
        })
        builder.addCase(getHotelsData.rejected, (state, action: any) => {
            state.isLoading = true
            state.error = action.payload
        })
    },
})

export const { actions: hotelsActions } = hotelsSlice
export const { reducer: hotelsReducer } = hotelsSlice
