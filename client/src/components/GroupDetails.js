import React from 'react';
import { Avatar, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	container: {
		display: 'flex',
		flexDirection: 'row',
		margin: theme.spacing(2, 1, 2, 1),
		alignItems: 'center',
	},
	bar: {
		height: '50px',
		width: '3px',
		background: theme.palette.primary.main,
	},
	avatar: {
		background: theme.palette.primary.main,
		marginLeft: theme.spacing(1),
	},
	groupNameAndMembers: {
		display: 'flex',
		flexDirection: 'column',
	},
	groupName: {
		marginLeft: theme.spacing(1),
	},
	groupMembers: {
		marginLeft: theme.spacing(1),
	},
}));

const GroupDetails = ({ group }) => {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<div className={classes.bar}></div>
			<Avatar className={classes.avatar}>{group.groupName[0]}</Avatar>
			<div className={classes.groupNameAndMembers}>
				<h2 className={classes.groupName}>{group.groupName}</h2>
				<h4 className={classes.groupMembers}>
					{' '}
					{group.groupMembers.join(', ')}{' '}
				</h4>
			</div>
		</div>
	);
};

export default GroupDetails;
