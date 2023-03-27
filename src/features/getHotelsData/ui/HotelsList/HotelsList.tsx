import { useSelector } from 'react-redux'

import styles from './HotelsList.module.css'
import { getHotelsState } from '../../model/selectors/getHotelsState'
import { HotelItem } from '../HotelItem/HotelItem'
import { Slider } from 'entities/Slider'
import { Loader } from 'shared/ui/Loader/Loader'
import { declensionOfNumerals } from 'shared/lib/functions/declensionOfNumerals/declensionOfNumerals'

export const HotelsList = () => {
    const { hotels, isLoading, requestData, favoriteHotels } = useSelector(getHotelsState)

    return (
        <div className={styles.hotels_list}>
            <div className={styles.title}>
                <div className={styles.hotel}>
                    <div className={styles.city}>Отели</div>
                    <svg
                        className={styles.arrow}
                        width="11"
                        height="20"
                        viewBox="0 0 11 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1 1.33334L9.66667 10L1 18.6667"
                            stroke="#A7A7A7"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <div className={styles.city}>{requestData.location}</div>
                </div>
                <div className={styles.date}>{requestData.date}</div>
            </div>
            <Slider />
            <div className={styles.favorites}>
                Добавлено в Избранное:<span>{favoriteHotels.length}</span>{' '}
                {declensionOfNumerals(favoriteHotels.length, ['отель', 'отеля', 'отелей'])}
            </div>
            {isLoading ? (
                <Loader />
            ) : (
                <div className={styles.hotels}>
                    {hotels.map((hotel) => (
                        <HotelItem
                            key={hotel.hotelId}
                            hotel={hotel}
                            date={requestData.date}
                            days={requestData.days}
                            favoriteHotels={favoriteHotels}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}
