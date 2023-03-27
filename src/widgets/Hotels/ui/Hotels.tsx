import styles from './Hotels.module.css'
import { FavoritesList, HotelsForm, HotelsList } from 'features/getHotelsData'

export const Hotels = () => {
    return (
        <div className={styles.hotels}>
            <div className={styles.left_bar}>
                <HotelsForm />
                <FavoritesList />
            </div>
            <HotelsList />
        </div>
    )
}
