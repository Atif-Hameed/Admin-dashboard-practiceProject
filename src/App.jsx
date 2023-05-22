import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import './App.css'
import { Box, CssBaseline, ThemeProvider, Typography } from '@mui/material'
import theme from './config/theme'
import SideNav from './components/SideNav'
import AppHeader from './components/AppHeader'
import { ProSidebarProvider } from 'react-pro-sidebar'
import AppRoutes from './components/routers/AppRoutes'

function App() {


  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <ProSidebarProvider>
          <CssBaseline />
          <AppHeader />
          <Box sx={Styles.container}>
            <BrowserRouter>
              <SideNav />
              <Box component={"main"} sx={Styles.mainSection}>
                <AppRoutes/>
              </Box>
            </BrowserRouter>
          </Box>
        </ProSidebarProvider>
      </ThemeProvider>
    </React.Fragment>
  )
}

/** @type{import("@mui/material").SxProps} */
const Styles = {
  container: {
    display: 'flex',
    color: 'primary',
    height: 'calc(100% - 64px)'
  },
  mainSection: {
    p: 4,
    width: '100%',
    height: '100%'
  }
}

export default App
