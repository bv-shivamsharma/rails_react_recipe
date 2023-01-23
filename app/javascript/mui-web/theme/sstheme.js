import * as React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { PageHeaderPalette, MainHeaderPalette } from './palette'

export const defaultAppTheme = createTheme({
	spacing: 10
})

export const pageHeaderTheme = createTheme({
	components: {
		MuiAppBar: {
			styleOverrides: {
				colorPrimary: {
					backgroundColor: PageHeaderPalette.bgColor
				},
				root: {
					color: PageHeaderPalette.color,
					boxShadow: 'unset'
				}
			}
		}
	}
})

export const mainHeaderTheme = createTheme({
	components: {
		MuiAppBar: {
			styleOverrides: {
				colorPrimary: {
					backgroundColor: MainHeaderPalette.bgColor
				},
				root: {
					color: MainHeaderPalette.color,
					boxShadow: 'unset'
				}
			}
		},
		MuiButton: {
			styleOverrides: {
				root: {
					color: MainHeaderPalette.buttonColor,
					marginTop: defaultAppTheme.spacing(2),
					marginBottom: defaultAppTheme.spacing(2),
					textTransform: 'unset'
				}
			}
		}
	}
})

export const customButtonTheme = createTheme({
	palette: {
		primary: {
			main: "#ff0000"
		}
	}
})
