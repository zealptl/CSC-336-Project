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

	const groupMembers =
		group && group.users.length > 0
			? group.users.map((u) => u.firstname + ' ' + u.lastname).join(', ')
			: [];

	return (
		<div className={classes.container}>
			<div className={classes.bar}></div>
			<Avatar className={classes.avatar}>
				{group ? group.groupname[0] : ''}
			</Avatar>
			<div className={classes.groupNameAndMembers}>
				<h2 className={classes.groupName}>{group ? group.groupname : ''}</h2>

				<h4 className={classes.groupMembers}>{groupMembers}</h4>
			</div>
		</div>
	);
};

export default GroupDetails;
