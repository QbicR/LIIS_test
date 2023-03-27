import { Suspense, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import './styles/index.css'
import { AppRouter } from './providers/router'
import { getUserAuthData, userAction } from 'entities/User'
import { Navbar } from 'widgets/Navbar'
import { RoutePath } from 'shared/config/routerConfig/RouterConfig'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { hotelsActions } from 'features/getHotelsData/model/slice/hotelsSlice'

const App = () => {
    const user = useSelector(getUserAuthData)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(userAction.initAuthData())
        dispatch(hotelsActions.initFavoriteHotels())
        if (user) {
            navigate(RoutePath.main)
        }
    }, [dispatch, navigate, user])

    return (
        <div>
            {user && <Navbar />}
            <Suspense fallback="">
                <AppRouter />
            </Suspense>
        </div>
    )
}

export default App
