import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import RootComponent from './RootComponent'
import { persistor, store } from './store/reducers/store'
import { ThemeProvider, createTheme } from '@mui/material'
import { commonBorderStyle } from './styles/CommonStyles'

const App: React.FC = () => {
    const theme = createTheme({
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        borderRadius: 40,
                        color:'#232E3E',
                        border:commonBorderStyle,
                        paddingInline:30,
                        fontSize:12,
                    },
                    
                }
            },
            MuiInput: {
                styleOverrides: {
                    // Name of the slot
                    root: {
                        // Some CSS
                        fontFamily: 'Manrope-Bold'
                    }
                }
            },
            MuiInputLabel: {
                styleOverrides: {
                    // Name of the slot
                    root: {
                        // Some CSS
                        fontFamily: 'Manrope-Bold'
                    }
                }
            }
        }
    })

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeProvider theme={theme}>
                    <RootComponent />
                </ThemeProvider>
            </PersistGate>
        </Provider>
    )
}

export default App
