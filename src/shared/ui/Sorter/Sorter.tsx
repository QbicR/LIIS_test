import React, { memo, useCallback, useState } from 'react'

import styles from './Sorter.module.css'

interface Props {
    childer?: React.ReactNode
    onClick?: (type: boolean) => void
}

export const Sorter: React.FC<Props> = memo((props) => {
    const { childer, onClick } = props
    const [type, setType] = useState<boolean>(true)

    const changeType = useCallback(() => {
        onClick(type)
        setType(!type)
    }, [type, onClick])

    return (
        <div onClick={changeType} className={styles.sorter}>
            <div className={styles.text}>{childer}</div>
            <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M13.5 7.24264L12.4393 8.3033L9.25736 5.12132L6.07538 8.3033L5.01472 7.24264L9.25736 3L13.5 7.24264Z"
                    fill="#41522E"
                    fillOpacity={type ? '0.3' : ''}
                />
                <path
                    d="M13.5 10.8324L12.4393 9.77179L9.25736 12.9538L6.07538 9.77179L5.01472 10.8324L9.25736 15.0751L13.5 10.8324Z"
                    fill="#41522E"
                    fillOpacity={!type ? '0.3' : ''}
                />
            </svg>
        </div>
    )
})
