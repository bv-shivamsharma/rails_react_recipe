import * as React from 'react';
import { styled } from '@mui/material/styles'

const WithStyle = (WrappedComponent, styles) => {
	return styled(WrappedComponent)(({ theme }) => ({...styles}))
}

export default WithStyle
