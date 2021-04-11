import React from 'react';
import { makeStyles } from '@material-ui/core';

import { GroupDetails } from './index';

const useStyles = makeStyles((theme) => ({
	container: {
		background: theme.palette.component.light,
		borderRadius: '20px',
		boxShadow: '4px 4px 8px rgba(1, 25, 47, 0.08)',
		height: '100%',
		padding: theme.spacing(2),
		marginRight: theme.spacing(1),
	},
}));

const TasksContainer = ({ group, tasks }) => {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<GroupDetails group={group} />
		</div>
	);
};

export default TasksContainer;
