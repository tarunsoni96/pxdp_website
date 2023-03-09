import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import RootComponent from './RootComponent'
import { persistor, store } from './store/reducers/store'
import { ThemeProvider, createTheme } from '@mui/material'

const App: React.FC = () => {
    const theme = createTheme({
        components: {
          // Name of the component
          MuiInput: {
            styleOverrides: {
              // Name of the slot
              root: {
                // Some CSS
                fontFamily:'Manrope-Bold'
              },
            },
          },
          MuiInputLabel: {
            styleOverrides: {
              // Name of the slot
              root: {
                // Some CSS
                fontFamily:'Manrope-Bold'
              },
            },
          },
        },
      });
      
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeProvider theme={theme} >

                <RootComponent />
                </ThemeProvider>
            </PersistGate>
        </Provider>
    )
}

export default App
