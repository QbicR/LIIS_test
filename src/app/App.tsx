import { Suspense, useEffect } from 'react'

import './styles/index.css'
import { AppRouter } from './providers/router'
import { useSelector } from 'react-redux'
import { getUserAuthData, userAction } from 'entities/User'
import { useNavigate } from 'react-router-dom'
import { RoutePath } from 'shared/config/routerConfig/RouterConfig'
import { Navbar } from 'widgets/Navbar'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

const App = () => {
    const user = useSelector(getUserAuthData)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(userAction.initAuthData())
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
