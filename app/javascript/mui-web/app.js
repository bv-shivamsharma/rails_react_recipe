import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { defaultAppTheme } from './theme/sstheme'
import MainHeader from './components/mainheader'
import SiteDetails from './pages/sitedetails'
import './app.scss'

const App = (props) => {
	return <ThemeProvider theme={defaultAppTheme}>
		<MainHeader />
		<SiteDetails />
	</ThemeProvider>
}

export default App
