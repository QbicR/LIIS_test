import React, { memo, ReactNode } from 'react'
import styles from './Button.module.css'

interface Props {
    children?: ReactNode
    onClick?: () => void
}

export const Button: React.FC<Props> = memo((props) => {
    const { children, onClick } = props

    return (
        <button onClick={onClick} className={styles.button}>
            {children}
        </button>
    )
})
