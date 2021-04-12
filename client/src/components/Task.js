import React from 'react';
import { makeStyles } from '@material-ui/core';

import theme from '../theme';

const useStyles = makeStyles((theme) => ({
	container: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		width: '100%',
		height: '20px',
		borderRadius: '0px 5px 5px 0px',

		marginBottom: theme.spacing(2),
		padding: theme.spacing(2, 0, 2, 0),
	},

	bar: {
		height: '30px',
		width: '3px',

		marginRight: theme.spacing(1),
	},
}));

const Task = ({ task }) => {
	const classes = useStyles();

	return (
		<div
			className={classes.container}
			style={{ background: theme.palette.task[task.status] }}
		>
			<div
				className={classes.bar}
				style={{ background: theme.palette.taskBar[task.status] }}
			></div>
			<p>{task.task}</p>
		</div>
	);
};

export default Task;
