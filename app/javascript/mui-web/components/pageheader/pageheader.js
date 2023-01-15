import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import { ThemeProvider } from '@mui/material/styles';
import { pageHeaderTheme } from './../../theme/sstheme'
import './pageheader.scss'

const PageHeader = (props) => {
	const { title = "Page Header" } = props
	return (
		<ThemeProvider theme={pageHeaderTheme}>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position="static">
					<Toolbar>
						<Typography variant="h6" component="div" sx={{ flexGrow: 1 }} align="center">
							{title}
						</Typography>
					</Toolbar>
				</AppBar>
			</Box>
		</ThemeProvider>
	)
}

export default PageHeader
