import React, { useState } from 'react';
import {
	Avatar,
	Grid,
	Paper,
	Button,
	IconButton,
	makeStyles,
} from '@material-ui/core';

function Dashboard(props) {
	const useStyles = makeStyles((theme) => ({
		root: {
			display: 'flex',
			flexWrap: 'wrap',
			'& > *': {
				margin: theme.spacing(1),
			},
			backgroundColor: '#FFFFFF',
		},
	}));

	const classes = useStyles();

	return (
		<div>
			<h2
				style={{
					position: 'absolute',
					marginLeft: '415px',
					marginBottom: '616px',
					width: '300px',
				}}
			>
				{' '}
				The Rocinante Crew{' '}
			</h2>
			<h4
				style={{
					position: 'absolute',
					marginLeft: '415px',
					marginTop: '30px',
					marginBottom: '500px',
					width: '500px',
				}}
			>
				{' '}
				James Holden, Amos Burton, Alex Kamal, Naomi Nagata{' '}
			</h4>
			<Avatar
				style={{
					backgroundColor: '#0779E4',
					color: '#FFFFFF',
					marginLeft: '365px',
					marginTop: '51px',
					width: '40px',
					height: '40px',
				}}
			>
				{' '}
				RC{' '}
			</Avatar>

			<Button
				style={{
					position: 'absolute',
					marginLeft: '823px',
					marginTop: '134px',
					marginBottom: '541px',
					borderRadius: '37px',
					borderColor: '#0779E4',
					height: '30px',
				}}
				variant='outlined'
				color='#FFFFFF'
			>
				{' '}
				+ New Task{' '}
			</Button>

			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					marginRight: '120px',
					marginTop: '200px',
					borderRadius: '20px',
					boxShadow: '4px, 4px, 8px, rgba(1, 25, 47, 0)',
				}}
			>
				<Paper
					style={{
						backgroundColor: '#EEEEEE',
						width: '176px',
						height: '481px',
						marginRight: '20px',
					}}
					className='taskDiv'
					elevation='10'
				>
					<div>
						<h2 style={{ position: 'absolute', marginLeft: '10px' }}>To Do</h2>
					</div>
				</Paper>

				<Paper
					style={{
						backgroundColor: '#EEEEEE',
						width: '176px',
						height: '481px',
						marginRight: '20px',
					}}
					className='taskDiv'
					elevation='10'
				>
					<div>
						<h2 style={{ position: 'absolute', marginLeft: '10px' }}>
							In Progress
						</h2>
					</div>
				</Paper>
				<Paper
					style={{
						backgroundColor: '#EEEEEE',
						width: '176px',
						height: '481px',
						marginRight: '20px',
					}}
					className='taskDiv'
					elevation='10'
				>
					<div>
						<h2 style={{ position: 'absolute', marginLeft: '10px' }}>
							Completed
						</h2>
					</div>
				</Paper>
			</div>
		</div>
	);
}

export default Dashboard;
