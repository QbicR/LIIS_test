import { RouteProps } from 'react-router-dom'

import { ErrorPage } from 'pages/ErrorPage'
import { LoginPage } from 'pages/LoginPage'
import { MainPage } from 'pages/MainPage'

export enum AppRoutes {
    MAIN = 'main',
    AUTH = 'auth',
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.AUTH]: '/login',
    [AppRoutes.NOT_FOUND]: '*',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.AUTH]: {
        path: RoutePath.auth,
        element: <LoginPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <ErrorPage />,
    },
}
