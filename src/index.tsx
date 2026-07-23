import { StyledEngineProvider } from '@mui/material/styles'
import * as ReactDOM from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import ErrorFallback from '@/components/Core/ErrorFallback'

import App from './App'
import { persister, store } from './store'

ReactDOM.createRoot(document.querySelector('#root')!).render(
  // <React.StrictMode>
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <StyledEngineProvider injectFirst>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persister}>
          <App />
        </PersistGate>
      </Provider>
    </StyledEngineProvider>
  </ErrorBoundary>
  // </React.StrictMode>
)
