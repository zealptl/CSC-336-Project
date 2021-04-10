import React from 'react';
import { Avatar, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	container: {
		display: 'flex',
		alignItems: 'center',
		background: theme.palette.component.light,
		borderRadius: '20px',
		boxShadow: '4px 4px 8px rgba(1, 25, 47, 0.08)',
		height: '15%',
	},
	avatar: {
		background: theme.palette.primary.main,
		marginLeft: theme.spacing(2),
		height: '50px',
		width: '50px',
	},
	user: {
		marginLeft: theme.spacing(2),
		overflow: 'ellipsis',
	},
}));

const UserDetail = ({ user }) => {
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<Avatar
				className={classes.avatar}
			>{`${user.firstName[0]} ${user.lastName[0]}`}</Avatar>
			<h2 className={classes.user}>{`${user.firstName} ${user.lastName}`}</h2>
		</div>
	);
};

export default UserDetail;
