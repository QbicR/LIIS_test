import { LoginForm } from 'features/UserAuth'
import styles from './LoginPage.module.css'

const LoginPage = () => {
    return (
        <>
            <div className={styles.login_page}></div>
            <LoginForm />
        </>
    )
}

export default LoginPage
