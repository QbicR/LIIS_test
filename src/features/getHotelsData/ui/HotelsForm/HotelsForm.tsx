import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'

import { getHotelsState } from '../../model/selectors/getHotelsState'
import styles from './HotelsForm.module.css'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { hotelsActions } from 'features/getHotelsData/model/slice/hotelsSlice'
import { getHotelsData } from 'features/getHotelsData/model/services/getHotelsData'

export const HotelsForm = () => {
    const dispatch = useAppDispatch()
    const { location, date, days } = useSelector(getHotelsState)

    const onChangeLocation = useCallback(
        (value: string) => {
            dispatch(hotelsActions.setLocation(value))
            console.log(value)
        },
        [dispatch],
    )

    const onChangeDate = useCallback(
        (value: string) => {
            dispatch(hotelsActions.setDate(value))
            console.log(value)
        },
        [dispatch],
    )

    const onChangeDays = useCallback(
        (value: string) => {
            dispatch(hotelsActions.setDays(value))
            console.log(value)
        },
        [dispatch],
    )

    const dateTranslation = useCallback(() => {
        const dateOfDeparture = new Date(date)
        dateOfDeparture.setDate(dateOfDeparture.getDate() + Number(days))
        const newDate = dateOfDeparture.toISOString().slice(0, 10)
        return newDate
    }, [date, days])

    const searchHotels = useCallback(() => {
        const newDate = dateTranslation()
        dispatch(getHotelsData({ location, date, newDate }))
    }, [location, date, dateTranslation, dispatch])

    return (
        <div className={styles.hotels_form}>
            <div>
                <Input
                    value={location}
                    onChange={onChangeLocation}
                    inputName={'Локация'}
                    type={'text'}
                />
                <Input
                    value={date}
                    onChange={onChangeDate}
                    inputName={'Дата заселения'}
                    type={'date'}
                />
                <Input
                    value={days}
                    onChange={onChangeDays}
                    inputName={'Количество дней'}
                    type={'text'}
                />
            </div>
            <Button onClick={searchHotels}>Найти</Button>
        </div>
    )
}
