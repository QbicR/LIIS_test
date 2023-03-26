import { memo } from 'react'
import { useSelector } from 'react-redux'

import styles from './Slider.module.css'
import { getImagesState } from '../../model/selectors/getImagesState'

export const Slider = memo(() => {
    const { images } = useSelector(getImagesState)

    return (
        <div className={styles.slider}>
            {images.map((image) => (
                <div
                    className={styles.image}
                    style={{ backgroundImage: `url(${image.img})` }}
                    key={image.id}
                ></div>
            ))}
        </div>
    )
})
