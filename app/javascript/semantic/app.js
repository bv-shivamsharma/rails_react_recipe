import React, { Component } from 'react'
import { Container, Menu, Segment, Image } from 'semantic-ui-react'
import './app.scss'

const MenuExampleInvertedSegment = () => {

	const { activeItem } = {}

	const handleItemClick = (event) => null

	return (
		<Menu className="main-header" secondary background="pink">
			<Container>
				<Menu.Item>
					<img alt="logo" className="bv-logo" src='/assets/dash-logo.svg' width={25} />
				</Menu.Item>
				<Menu.Item
					name='Dashboard'
					active={activeItem === 'dashboard'}
					onClick={handleItemClick}
				/>
				<Menu.Item
					name='Sites'
					active={activeItem === 'sites'}
					onClick={handleItemClick}
				/>
			</Container>
		</Menu>
	)
}

export default MenuExampleInvertedSegment
