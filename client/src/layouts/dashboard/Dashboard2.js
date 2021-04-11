import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';

import { Sidebar, TasksContainer, RightSidebar } from '../../components';

const useStyles = makeStyles((theme) => ({
	main: {
		height: '100vh',
		width: '100vw',
		backgroundColor: theme.palette.component.main,
		margin: theme.spacing(0),
	},
	itemContainer: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
	},
}));

const Dashboard2 = () => {
	const classes = useStyles();

	const groups = [
		{
			groupName: 'The Rocinante Crew',
			groupMembers: [
				'James Holden',
				'Amos Burton',
				'Naomi Nagata',
				'Alex Kamal',
			],
		},
		{
			groupName: 'United Nations Navy',
			groupMembers: [
				'Chrisjen Avasarala',
				'Agusto Nguyen',
				'Michael Souther',
				'Felix Delgado',
			],
		},
		{
			groupName: 'Martian Congressional Republic Navy',
			groupMembers: [
				'Bobby Draper',
				'Emil Sauveterre',
				'Theresa Yao',
				'Alex Kamal',
			],
		},
		{
			groupName: 'Outer Planets Alliance',
			groupMembers: [
				'Fred Johnson',
				'Anderson Dawes',
				'Naomi Nagata',
				'Klaes Ashford',
				'Marco Inaros',
			],
		},
		{
			groupName: 'The Rocinante Crew',
			groupMembers: [
				'James Holden',
				'Amos Burton',
				'Naomi Nagata',
				'Alex Kamal',
			],
		},
		{
			groupName: 'United Nations Navy',
			groupMembers: [
				'Chrisjen Avasarala',
				'Agusto Nguyen',
				'Michael Souther',
				'Felix Delgado',
			],
		},
		{
			groupName: 'Martian Congressional Republic Navy',
			groupMembers: [
				'Bobby Draper',
				'Emil Sauveterre',
				'Theresa Yao',
				'Alex Kamal',
			],
		},
		{
			groupName: 'Outer Planets Alliance',
			groupMembers: [
				'Fred Johnson',
				'Anderson Dawes',
				'Naomi Nagata',
				'Klaes Ashford',
				'Marco Inaros',
			],
		},
		{
			groupName: 'The Rocinante Crew',
			groupMembers: [
				'James Holden',
				'Amos Burton',
				'Naomi Nagata',
				'Alex Kamal',
			],
		},
		{
			groupName: 'United Nations Navy',
			groupMembers: [
				'Chrisjen Avasarala',
				'Agusto Nguyen',
				'Michael Souther',
				'Felix Delgado',
			],
		},
		{
			groupName: 'Martian Congressional Republic Navy',
			groupMembers: [
				'Bobby Draper',
				'Emil Sauveterre',
				'Theresa Yao',
				'Alex Kamal',
			],
		},
		{
			groupName: 'Outer Planets Alliance',
			groupMembers: [
				'Fred Johnson',
				'Anderson Dawes',
				'Naomi Nagata',
				'Klaes Ashford',
				'Marco Inaros',
			],
		},
	];
	console.log('GROUPS:::::', groups[0]);
	return (
		<div>
			<Grid container spacing={3} className={classes.main}>
				<Grid item xs={12} sm={3} className={classes.itemContainer}>
					<Sidebar groups={groups} />
				</Grid>
				<Grid item xs={12} sm={6} className={classes.itemContainer}>
					<TasksContainer group={groups[0]} />
				</Grid>
				<Grid item xs={12} sm={3} className={classes.itemContainer}>
					<RightSidebar />
				</Grid>
			</Grid>
		</div>
	);
};

export default Dashboard2;
