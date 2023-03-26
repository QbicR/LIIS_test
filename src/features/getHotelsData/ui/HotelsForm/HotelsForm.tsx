import { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'

import styles from './HotelsForm.module.css'
import { getHotelsState } from '../../model/selectors/getHotelsState'
import { hotelsActions } from '../../model/slice/hotelsSlice'
import { getHotelsData } from '../../model/services/getHotelsData'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { getTime } from 'shared/lib/functions/getTime/getTime'
import { translationOfDate } from 'shared/lib/functions/translationOfDate/translationOfDate'

export const HotelsForm = () => {
    const dispatch = useAppDispatch()
    const { location, date, days } = useSelector(getHotelsState)

    const onChangeLocation = useCallback(
        (value: string) => {
            dispatch(hotelsActions.setLocation(value))
        },
        [dispatch],
    )

    const onChangeDate = useCallback(
        (value: string) => {
            dispatch(hotelsActions.setDate(value))
        },
        [dispatch],
    )

    const onChangeDays = useCallback(
        (value: string) => {
            dispatch(hotelsActions.setDays(value))
        },
        [dispatch],
    )

    const searchHotels = useCallback(() => {
        dispatch(getHotelsData({ location, date, newDate: translationOfDate(date, days) }))
        dispatch(hotelsActions.setRequestData({ location, date: getTime(date), days }))
    }, [location, date, dispatch, days])

    useEffect(() => {
        searchHotels()
    }, [])

    return (
        <div className={styles.hotels_form}>
            <div>
                <Input value={location} onChange={onChangeLocation} inputName={'Локация'} />
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
                    type={'number'}
                />
            </div>
            <Button onClick={searchHotels}>Найти</Button>
        </div>
    )
}
