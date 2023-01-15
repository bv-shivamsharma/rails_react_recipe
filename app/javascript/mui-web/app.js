import React from 'react'
import './app.scss'
import MainHeader from './components/mainheader'
import SiteDetails from './pages/sitedetails'

const App = (props) => {
	return  <React.Fragment>
		<MainHeader />
		<SiteDetails />
	</React.Fragment>
}

export default App
