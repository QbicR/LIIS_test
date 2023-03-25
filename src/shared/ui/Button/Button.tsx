import React, { memo, ReactNode } from 'react'
import styles from './Button.module.css'

interface Props {
    children?: ReactNode
    onClick?: () => void
    disabled?: boolean
}

export const Button: React.FC<Props> = memo((props) => {
    const { children, onClick, disabled } = props

    return (
        <button disabled={disabled} onClick={onClick} className={styles.button}>
            {children}
        </button>
    )
})
