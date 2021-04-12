import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';

import { TasksColumn } from './index';

const useStyles = makeStyles((theme) => ({
	container: {
		marginTop: theme.spacing(3),
	},
	gridContainer: {
		minHeight: '495px',
	},
}));

const TasksColumnsContainer = () => {
	const classes = useStyles();

	const toDo = [
		{ task: 'Task 1', status: 'toDo' },
		{ task: 'Task 2', status: 'toDo' },
		{ task: 'Task 3', status: 'toDo' },
		{ task: 'Task 4', status: 'toDo' },
	];
	const inProgress = [
		{ task: 'Task 1', status: 'inProgress' },
		{ task: 'Task 2', status: 'inProgress' },
		{ task: 'Task 3', status: 'inProgress' },
		{ task: 'Task 4', status: 'inProgress' },
	];
	const done = [
		{ task: 'Task 1', status: 'done' },
		{ task: 'Task 2', status: 'done' },
		{ task: 'Task 3', status: 'done' },
		{ task: 'Task 4', status: 'done' },
	];

	return (
		<div className={classes.container}>
			<Grid className={classes.gridContainer} container spacing={3}>
				<Grid item xs={12} sm={4}>
					<TasksColumn tasks={toDo} columnTitle='To Do' />
				</Grid>

				<Grid item xs={12} sm={4}>
					<TasksColumn tasks={inProgress} columnTitle='In Progress' />
				</Grid>

				<Grid item xs={12} sm={4}>
					<TasksColumn tasks={done} columnTitle='Done' />
				</Grid>
			</Grid>
		</div>
	);
};

export default TasksColumnsContainer;
