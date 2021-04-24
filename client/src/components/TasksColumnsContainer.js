import React, { useEffect, useContext } from 'react';
import { Grid, makeStyles } from '@material-ui/core';

import { TasksColumn } from './index';

import TasksContext from '../context/tasks/tasksContext';

const useStyles = makeStyles((theme) => ({
	container: {
		marginTop: theme.spacing(3),
	},
	gridContainer: {
		minHeight: '495px',
	},
}));

const TasksColumnsContainer = ({ group }) => {
	const classes = useStyles();

	const tasksContext = useContext(TasksContext);
	const { getTasks, tasks } = tasksContext;

	useEffect(() => {
		if (group) {
			getTasks(group.groupid);
		}

		// eslint-disable-next-line
	}, [group]);

	return (
		<div className={classes.container}>
			<Grid className={classes.gridContainer} container spacing={3}>
				<Grid item xs={12} sm={4}>
					<TasksColumn tasks={tasks.toDoTasks} columnTitle='To Do' />
				</Grid>

				<Grid item xs={12} sm={4}>
					<TasksColumn
						tasks={tasks.inProgressTasks}
						columnTitle='In Progress'
					/>
				</Grid>

				<Grid item xs={12} sm={4}>
					<TasksColumn tasks={tasks.doneTasks} columnTitle='Done' />
				</Grid>
			</Grid>
		</div>
	);
};

export default TasksColumnsContainer;
