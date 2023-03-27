import { useNavigate } from 'react-router-dom'
import { RoutePath } from 'shared/config/routerConfig/RouterConfig'
import { Button } from 'shared/ui/Button/Button'
import styles from './ErrorPage.module.css'

const ErrorPage = () => {
    const navigate = useNavigate()

    return (
        <div className={styles.error_page}>
            <div className={styles.container}>
                <h3 className={styles.primary_header}>
                    К сожалению, вы зашли на несуществующую страницу. Возможно, вы перешли по старой
                    ссылке или ввели неправильный адрес.
                </h3>
                <h3 className={styles.secondary_header}>
                    Попробуйте проверить ссылку или вернитесь на главную страницу.
                </h3>
                <Button onClick={() => navigate(RoutePath.main)} children={'На главную'} />
            </div>
        </div>
    )
}

export default ErrorPage
