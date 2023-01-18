import React, { Component } from 'react'
import { Menu, Segment, Image } from 'semantic-ui-react'
import './app.scss'

const MenuExampleInvertedSegment = () => {

	const { activeItem } = {}

	const handleItemClick = (event) => null

	return (
		<Menu className="main-header" secondary background="pink">
			<Menu.Item>
				<img alt="logo" src='/assets/dash-logo.svg' width={25} />
			</Menu.Item>
			<Menu.Item
				name='home'
				active={activeItem === 'home'}
				onClick={handleItemClick}
			/>
			<Menu.Item
				name='messages'
				active={activeItem === 'messages'}
				onClick={handleItemClick}
			/>
			<Menu.Item
				name='friends'
				active={activeItem === 'friends'}
				onClick={handleItemClick}
			/>
		</Menu>
	)
}

export default MenuExampleInvertedSegment
