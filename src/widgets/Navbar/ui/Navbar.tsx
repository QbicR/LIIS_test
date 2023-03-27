import { memo } from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './Navbar.module.css'
import { userAction } from 'entities/User'
import { RoutePath } from 'shared/config/routerConfig/RouterConfig'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { hotelsActions } from 'features/getHotelsData'

export const Navbar = memo(() => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const logOut = () => {
        dispatch(userAction.logOut())
        dispatch(hotelsActions.clearFavoriteHotel())
        navigate(RoutePath.auth)
    }

    return (
        <div className={styles.navbar}>
            <div className={styles.header}>
                <div className={styles.app_name}>Simple Hotel Check</div>
                <div onClick={logOut} className={styles.exit}>
                    Выйти
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9"
                            stroke="#41522E"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M16 17L21 12L16 7"
                            stroke="#41522E"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M21 12H9"
                            stroke="#41522E"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </div>
        </div>
    )
})
