import React from 'react'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import PageHeader from './../../components/pageheader'
import SiteDetailsLeftPanel from './sitedetailsleftpanel'
import SiteDetailsFeatures from './sitedetailsfeatures'

const SiteDetails = (props) => {
	return <React.Fragment>
		<PageHeader title="Site Overview" />
		<Container maxWidth="xl">
			<Grid container spacing={2} sx={{ margin: 2 }}>
				<Grid item xs={12} md={4} >
					<SiteDetailsLeftPanel />
				</Grid>
				<Grid item xs={12} md={8}>
					<SiteDetailsFeatures />
				</Grid>
			</Grid>
		</Container>
	</React.Fragment>
}

export default SiteDetails
