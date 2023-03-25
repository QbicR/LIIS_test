import React from 'react'
import styles from './MainPage.module.css'

import { HotelsForm, HotelsList } from 'features/getHotelsData'

const MainPage = () => {
    return (
        <div className={styles.main_page}>
            <HotelsForm />
            <HotelsList />
        </div>
    )
}

export default MainPage
