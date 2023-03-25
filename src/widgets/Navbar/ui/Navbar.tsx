import React, { memo } from 'react'
import styles from './Navbar.module.css'

export const Navbar = memo(() => {
    return (
        <div className={styles.navbar}>
            <div className={styles.header}>
                <div className={styles.app_name}>Simple Hotel Check</div>
                <div>Выйти</div>
            </div>
        </div>
    )
})
