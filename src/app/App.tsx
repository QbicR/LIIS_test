import { Suspense } from 'react'

import './styles/index.css'
import { AppRouter } from './providers/router'

const App = () => {
    return (
        <div>
            <Suspense fallback="">
                <AppRouter />
            </Suspense>
        </div>
    )
}

export default App
