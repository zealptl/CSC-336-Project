import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { Widget as ChatWidget } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

import { Sidebar, TasksSection } from '../../components';

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

const Dashboard = () => {
	const classes = useStyles();

	return (
		<div>
			<Grid container spacing={3} className={classes.main}>
				<Grid item xs={12} sm={3} className={classes.itemContainer}>
					<Sidebar />
				</Grid>

				<Grid item xs={12} sm={9} className={classes.itemContainer}>
					<TasksSection />
				</Grid>
			</Grid>

			<ChatWidget title='The Rocinante Crew' subtitle='' />
		</div>
	);
};

export default Dashboard;
