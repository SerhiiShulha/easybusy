import React from 'react'
import store, { persistor } from './library/store/configureStore'
import { Provider } from 'react-redux'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './library/styles/chakraConfig/chakraConfig'
import AppRouter from './features/AppRouter'
import { PersistGate } from 'redux-persist/integration/react'
import { ScreenClassProvider } from 'react-grid-system'
import { ToastContainer } from 'react-toastify'

console.log(theme)

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ChakraProvider theme={theme}>
          <ScreenClassProvider>
            <AppRouter />
            <ToastContainer
              position={'bottom-left'}
              hideProgressBar
              theme={'colored'}
            />
          </ScreenClassProvider>
        </ChakraProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
