import { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import styles from './FavoritesList.module.css'
import { FavoriteItem } from '../FavoriteItem/FavoriteItem'
import { getHotelsState } from '../../model/selectors/getHotelsState'
import { FavoriteHotelType } from '../../model/types/HotelsType'
import { Sorter } from 'shared/ui/Sorter/Sorter'

export const FavoritesList = () => {
    const { favoriteHotels } = useSelector(getHotelsState)
    const [sortedHotels, setSortedHotels] = useState<FavoriteHotelType[]>(favoriteHotels)

    useEffect(() => {
        setSortedHotels(favoriteHotels)
    }, [favoriteHotels])

    const sortByRating = useCallback(
        (type: boolean) => {
            const hotels = [...favoriteHotels]
            if (type) {
                setSortedHotels(hotels.sort((a, b) => b.priceAvg - a.priceAvg))
            } else {
                setSortedHotels(hotels.sort((a, b) => a.priceAvg - b.priceAvg))
            }
        },
        [favoriteHotels],
    )

    const sortByPrice = useCallback(
        (type: boolean) => {
            const hotels = [...favoriteHotels]
            if (type) {
                setSortedHotels(hotels.sort((a, b) => b.priceAvg - a.priceAvg))
            } else {
                setSortedHotels(hotels.sort((a, b) => a.priceAvg - b.priceAvg))
            }
        },
        [favoriteHotels],
    )

    return (
        <div className={styles.favorites_list}>
            <div className={styles.title}>Избранное</div>
            <div className={styles.sort}>
                <Sorter onClick={sortByRating} childer={'Рейтинг'} />
                <Sorter onClick={sortByPrice} childer={'Цена'} />
            </div>
            <div className={styles.favorites}>
                {sortedHotels.map((hotel) => (
                    <FavoriteItem key={hotel.hotelId} hotel={hotel} />
                ))}
            </div>
        </div>
    )
}
