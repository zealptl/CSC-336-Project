import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';

import Sidebar from '../../components/Sidebar';
import TasksContainer from '../../components/TasksContainer';
import MessagesContainer from '../../components/MessagesContainer';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
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
	return (
		<div className={classes.root}>
			<Grid container spacing={3} className={classes.main}>
				<Grid item xs={3} className={classes.itemContainer}>
					<Sidebar />
				</Grid>
				<Grid item xs={6} className={classes.itemContainer}>
					<TasksContainer />
				</Grid>
				<Grid item xs={3} className={classes.itemContainer}>
					<MessagesContainer />
				</Grid>
			</Grid>
		</div>
	);
};

export default Dashboard2;
