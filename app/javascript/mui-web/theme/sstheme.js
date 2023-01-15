import * as React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { PageHeaderPalette, MainHeaderPalette } from './palette'

export const pageHeaderTheme = createTheme({
	components: {
		MuiAppBar: {
			styleOverrides: {
				colorPrimary: {
					backgroundColor: PageHeaderPalette.bgColor
				},
				root: {
					color: PageHeaderPalette.titleColor,
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
					boxShadow: 'unset'
				}
			}
		}
	}
})
