import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import Container from '@mui/material/Container'
import Tooltip from '@mui/material/Tooltip'
import Avatar from '@mui/material/Avatar'
import MenuItem from '@mui/material/MenuItem'
import { ThemeProvider } from '@mui/material/styles'
import { mainHeaderTheme } from './../../theme/sstheme'
import './mainheader.scss'

const pages = ['Dashboard', 'Sites']
const settings = ['Profile', 'Managed Accounts']

const MainHeader = (props) => {
	const { title = "Page Header" } = props
	return (
		<ThemeProvider theme={mainHeaderTheme}>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position="static">
					<Container maxWidth="xl">
						<Toolbar>
							<Box
								component="img"
								sx={{
								display: { xs: 'none', md: 'flex' },
								width: 25,
								margin: '0 10px 0 0'
								}}
								alt="Dash Icon"
								src="/assets/dash-logo.svg"
							/>

							<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
								{pages.map(page => (
								<Button
									key={page}
									sx={{ my: 2, color: 'white', display: 'block', textTransform: 'unset' }}
									>
									{page}
								</Button>
								))}
							</Box>

							<Box sx={{ flexGrow: 0 }}>
								<Tooltip title="Open settings">
									<Button sx={{ my: 2, color: 'white', display: 'block', textTransform: 'unset' }}>
										Account
									</Button>
								</Tooltip>
								<Menu
									sx={{ mt: '45px' }}
									id="menu-appbar"
									anchorOrigin={{
										vertical: 'top',
										horizontal: 'right',
									}}
									keepMounted
									transformOrigin={{
										vertical: 'top',
										horizontal: 'right',
									}}
									open={false}
								>
									{settings.map((setting) => (
										<MenuItem key={setting}>
											<Typography textAlign="center">{setting}</Typography>
										</MenuItem>
									))}
								</Menu>
							</Box>
						</Toolbar>
					</Container>
				</AppBar>
			</Box>
		</ThemeProvider>
	)
}

export default MainHeader
