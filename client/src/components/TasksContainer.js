import React from 'react';
import { Avatar, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	container: {
		background: theme.palette.component.light,
		borderRadius: '20px',
		boxShadow: '4px 4px 8px rgba(1, 25, 47, 0.11)',
		height: '100%',
		padding: theme.spacing(2),
		// margin: theme.spacing(2, 0, 0, 2),
	},
}));

const TasksContainer = () => {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<Typography>Tasks</Typography>
		</div>
	);
};

export default TasksContainer;
