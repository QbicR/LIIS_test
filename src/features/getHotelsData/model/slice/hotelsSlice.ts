import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { getHotelsData } from '../services/getHotelsData'
import { FavoriteHotelType, HotelsType, RequestDataType } from '../types/HotelsType'
import { FAVORITE_HOTELS } from 'shared/const/localStorage'

const initialState: HotelsType = {
    location: 'Москва',
    date: new Date().toLocaleDateString().split('.').reverse().join('-'),
    days: '1',
    hotels: [],
    isLoading: false,
    error: '',
    requestData: { location: '', date: '', days: '' },
    favoriteHotels: [],
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
        setFavoriteHotel: (state, action: PayloadAction<FavoriteHotelType>) => {
            state.favoriteHotels.push(action.payload)
            localStorage.setItem(FAVORITE_HOTELS, JSON.stringify(state.favoriteHotels))
        },
        initFavoriteHotels: (state) => {
            const hotels = JSON.parse(localStorage.getItem(FAVORITE_HOTELS))
            if (hotels) {
                state.favoriteHotels = hotels
            }
        },
        deleteFavoriteHotel: (state, action: PayloadAction<number>) => {
            state.favoriteHotels = state.favoriteHotels.filter(
                (favHotel) => favHotel.hotelId !== action.payload,
            )
            localStorage.setItem(FAVORITE_HOTELS, JSON.stringify(state.favoriteHotels))
        },
        clearFavoriteHotel: (state) => {
            state.favoriteHotels = []
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getHotelsData.pending, (state) => {
            state.isLoading = true
            state.error = ''
        })
        builder.addCase(getHotelsData.fulfilled, (state, action: any) => {
            if (action.payload.errorCode === 2) {
                alert('Введены некоректные данные.')
                state.error = 'Введены некоректные данные.'
            } else if (action.payload.length === 0) {
                alert('Введены некоректные данные.')
                state.error = 'Введены некоректные данные.'
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
