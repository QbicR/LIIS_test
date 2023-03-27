import { USER_AUTH_DATA } from 'shared/const/localStorage'
import { AuthError } from 'widgets/AuthError'
import { Hotels } from 'widgets/Hotels'

const MainPage = () => {
    const isAuth = localStorage.getItem(USER_AUTH_DATA)

    return <>{isAuth ? <Hotels /> : <AuthError />}</>
}

export default MainPage
