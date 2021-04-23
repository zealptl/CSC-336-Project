import React, { useContext } from 'react';
import { Button, makeStyles } from '@material-ui/core';

import { GroupDetails, TasksColumnsContainer } from './index';

import GroupsContext from '../context/groups/groupsContext';

const useStyles = makeStyles((theme) => ({
	container: {
		background: theme.palette.component.light,
		borderRadius: '20px',
		boxShadow: '4px 4px 8px rgba(1, 25, 47, 0.08)',
		height: '100%',
		padding: theme.spacing(2),
		marginRight: theme.spacing(1),
	},
	buttonContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: theme.spacing(5.5),
	},
	button: {
		borderRadius: '10px',
	},
	addMemberButton: {
		border: `2px solid ${theme.palette.primary.main}`,

		'&:hover': {
			background: theme.palette.primary.main,
			color: '#FFF',
		},
	},
}));

const TasksSection = () => {
	const classes = useStyles();

	const groupsContext = useContext(GroupsContext);
	const { current } = groupsContext;

	return (
		<div className={classes.container}>
			<GroupDetails group={current} />

			<div className={classes.buttonContainer}>
				<Button variant='contained' color='primary' className={classes.button}>
					+ New Task
				</Button>
				<Button
					variant='outlined'
					color='primary'
					className={[classes.button, classes.addMemberButton]}
				>
					+ Add Member
				</Button>
			</div>

			<TasksColumnsContainer />
		</div>
	);
};

export default TasksSection;
