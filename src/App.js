import React from 'react'
import store, { persistor } from './library/store/configureStore'
import { Provider } from 'react-redux'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './library/styles/chakraConfig'
import AppRouter from './features/AppRouter'
import { PersistGate } from 'redux-persist/integration/react'
import { ScreenClassProvider } from 'react-grid-system'

console.log(theme)

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ChakraProvider theme={theme}>
            <ScreenClassProvider>
              <AppRouter />
            </ScreenClassProvider>
          </ChakraProvider>
        </PersistGate>
      </Provider>
    </>
  )
}

export default App
