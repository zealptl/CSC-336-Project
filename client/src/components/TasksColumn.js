import React from 'react';
import { makeStyles } from '@material-ui/core';

import { Task } from './index';

const useStyles = makeStyles((theme) => ({
	container: {
		height: '100%',
		background: theme.palette.component.main,
		boxShadow: '4px 4px 8px rgba(1, 25, 47, 0.11)',
		borderRadius: '20px',
		padding: theme.spacing(2),
	},
	title: {
		marginBottom: theme.spacing(2),
	},
}));

const TasksColumn = ({ columnTitle, tasks }) => {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<h3 className={classes.title}>{columnTitle}</h3>
			{tasks.map((t) => (
				<Task task={t} />
			))}
		</div>
	);
};

export default TasksColumn;
