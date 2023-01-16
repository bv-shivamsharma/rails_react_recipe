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

	const [anchorElNav, setAnchorElNav] = React.useState(null)
	const [anchorElUser, setAnchorElUser] = React.useState(null)

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget)
	}

	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget)
	}

	const handleCloseNavMenu = () => {
		setAnchorElNav(null)
	}

	const handleCloseUserMenu = () => {
		setAnchorElUser(null)
	}

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
									marginRight: 1
								}}
								alt="Dash Icon"
								src="/assets/dash-logo.svg"
							/>

							<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
								{pages.map(page => (
									<Button key={page}>
										{page}
									</Button>
								))}
							</Box>

							<Box sx={{ flexGrow: 0 }}>
								<Tooltip title="Open settings">
									<Button onClick={handleOpenUserMenu}>
										Account
									</Button>
								</Tooltip>
								<Menu
									sx={{ mt: 4 }}
									id="menu-appbar"
									anchorEl={anchorElUser}
									anchorOrigin={{
										vertical: 'top',
										horizontal: 'right',
									}}
									keepMounted
									transformOrigin={{
										vertical: 'top',
										horizontal: 'right',
									}}
									open={Boolean(anchorElUser)}
									onClose={handleCloseUserMenu}
								>
									{settings.map((setting) => (
										<MenuItem key={setting} onClick={handleCloseUserMenu}>
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
