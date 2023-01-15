import React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'

const SiteDetailsLeftPanel = (props) => {
	return (
		<Box sx={{ display: 'flex', flexWrap: 'wrap'}}>
			<Paper elevation={3} sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>

				<Stack spacing={2}>
					<Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', background: '#FAFBFD', pt: 3, pb: 4 }}>
						<Stack spacing={2} sx={{ alignItems: 'center' }}>
							<Avatar sx={{ width: '100px', height: '100px' }}>SS</Avatar>
							<Typography variant="h6" gutterBottom>
								shivamsharma@blogvault.net
							</Typography>
						</Stack>
					</Box>

					<Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', p: 1 }}>
						<Typography variant="subitle2" gutterBottom sx={{ px: 3, color: '#9B9B9B' }}>
							Realtime backup and scan for 20 sites charged monthly., Free 20 Important Pages per site for 1 site addon monthly X 10	
						</Typography>
					</Box>

				</Stack>
			</Paper>
		</Box>
	)
}

export default SiteDetailsLeftPanel
