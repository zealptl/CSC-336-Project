import React from 'react';
import { Avatar, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	container: {
		background: theme.palette.component.light,
		borderRadius: '20px',
		boxShadow: '4px 4px 8px rgba(1, 25, 47, 0.08)',
		height: '85%',
		marginTop: theme.spacing(3),
	},
}));

const MessagesContainer = () => {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<Typography>Messages</Typography>
		</div>
	);
};

export default MessagesContainer;
