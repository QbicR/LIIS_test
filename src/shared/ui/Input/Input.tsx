import React, { memo } from 'react'
import styles from './Input.module.css'

interface Props {
    onChange?: (value: string) => void
    inputName?: string
    inputError?: string
    type?: 'text' | 'password' | 'date' | 'number'
    value?: string | number
    defaultValue?: string
}

export const Input: React.FC<Props> = memo((props) => {
    const { onChange, inputName, inputError, type = 'text', value, defaultValue } = props

    return (
        <div className={styles.input}>
            <label className={styles.name}>{inputName}</label>
            <input
                defaultValue={defaultValue}
                value={value}
                type={type}
                onChange={(e) => onChange(e.target.value)}
                className={styles.input_area}
            />
            <label className={styles.error}>{inputError}</label>
        </div>
    )
})
