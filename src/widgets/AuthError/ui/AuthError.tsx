import { useNavigate } from 'react-router-dom'

import { RoutePath } from 'shared/config/routerConfig/RouterConfig'
import { Button } from 'shared/ui/Button/Button'
import styles from './AuthError.module.css'

export const AuthError = () => {
    const navigate = useNavigate()

    return (
        <div className={styles.auth_error}>
            <div className={styles.auth_form}>
                <div className={styles.title}>
                    Чтобы пользоваться приложением, необходимо авторизоваться.
                </div>
                <Button onClick={() => navigate(RoutePath.auth)} children={'Авторизоваться'} />
            </div>
        </div>
    )
}
