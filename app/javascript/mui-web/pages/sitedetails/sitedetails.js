import React from 'react'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid'
import PageHeader from './../../components/pageheader'
import SiteDetailsLeftPanel from './sitedetailsleftpanel'
import SiteDetailsFeatures from './sitedetailsfeatures'

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	color: theme.palette.text.secondary,
}))

const SiteDetails = (props) => {
	return <React.Fragment>
		<PageHeader title="Site Overview" />
		<Grid container spacing={2} sx={{ margin: '20px' }}>
			<Grid item xs={4}>
				<SiteDetailsLeftPanel />
			</Grid>
			<Grid item xs={8}>
				<SiteDetailsFeatures />
			</Grid>
		</Grid>
	</React.Fragment>
}

export default SiteDetails
