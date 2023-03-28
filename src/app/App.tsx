import { Suspense, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import './styles/index.css'
import { AppRouter } from './providers/router'
import { getUserAuthData } from 'entities/User'
import { Navbar } from 'widgets/Navbar'
import { RoutePath } from 'shared/config/routerConfig/RouterConfig'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { hotelsActions } from 'features/getHotelsData/model/slice/hotelsSlice'
import { USER_AUTH_DATA } from 'shared/const/localStorage'

const App = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const user = useSelector(getUserAuthData)
    const isAuth = localStorage.getItem(USER_AUTH_DATA)

    useEffect(() => {
        dispatch(hotelsActions.initFavoriteHotels())
        if (user) {
            navigate(RoutePath.main)
        }
    }, [dispatch, navigate, user])

    return (
        <div>
            {isAuth && <Navbar />}
            <Suspense fallback="">
                <AppRouter />
            </Suspense>
        </div>
    )
}

export default App
