import * as React from 'react'
import { styled } from '@mui/system'
import AppBar from '@mui/material/AppBar'
import { MainHeaderPalette } from './../../../palette'

const MainHeaderAppBar = styled(AppBar)(({ theme }) => ({
	color: MainHeaderPalette.color,
	backgroundColor: MainHeaderPalette.bgColor
}))

export default MainHeaderAppBar
