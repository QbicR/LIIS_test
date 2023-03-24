import { BrowserRouter } from 'react-router-dom'
import ReactDom from 'react-dom/client'

import App from './app/App'
import { StoreProvider } from 'app/providers/storeProvider'

const root = ReactDom.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <StoreProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StoreProvider>,
)
