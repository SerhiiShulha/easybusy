import React from 'react'
import AppRouter from './features/AppRouter'
import { store } from './library/store/configureStore'
import { Provider } from 'react-redux'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './library/styles/chakraConfig'

console.log(theme)

function App() {
  return (
    <>
      <Provider store={store}>
        <ChakraProvider theme={theme}>
          <AppRouter />
        </ChakraProvider>
      </Provider>
    </>
  )
}

export default App
