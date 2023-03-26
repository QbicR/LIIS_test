import { createAsyncThunk } from '@reduxjs/toolkit'

import { HotelType } from '../types/HotelsType'

interface Props {
    location: string
    date: string
    newDate: string
}

export const getHotelsData = createAsyncThunk<HotelType[], Props>(
    'hotels/getHotelsData',
    async (data, thunkApi) => {
        const { rejectWithValue } = thunkApi
        const { location, date, newDate } = data

        try {
            const response: HotelType[] = await fetch(
                `http://engine.hotellook.com/api/v2/cache.json?location=${location}&currency=rub&checkIn=${date}&checkOut=${newDate}&limit=20`,
                { method: 'GET' },
            ).then((res) => res.json())

            return response
        } catch (error) {
            return rejectWithValue('Ошибка запроса. Повторите попытку.')
        }
    },
)
