import { createSlice } from '@reduxjs/toolkit'

import image1 from 'shared/assets/slider/1.jpg'
import image2 from 'shared/assets/slider/2.jpg'
import image3 from 'shared/assets/slider/3.jpg'
import image4 from 'shared/assets/slider/4.jpg'
import { ImagesType } from '../types/ImagesType'

const initialState: ImagesType = {
    images: [
        { id: '1', img: image1 },
        { id: '2', img: image2 },
        { id: '3', img: image3 },
        { id: '4', img: image4 },
        { id: '5', img: image1 },
        { id: '6', img: image2 },
        { id: '7', img: image3 },
        { id: '8', img: image4 },
    ],
}

export const sliderSlice = createSlice({
    name: 'slider',
    initialState,
    reducers: {},
})

export const { actions: sliderActions } = sliderSlice
export const { reducer: sliderReducer } = sliderSlice
