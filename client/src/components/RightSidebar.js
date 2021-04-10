import React from 'react';
import { makeStyles } from '@material-ui/core';

import { MessagesContainer, UserDetail } from './index';

const useStyles = makeStyles((theme) => ({
	container: {
		height: '100%',
		// padding: theme.spacing(2),
		marginRight: theme.spacing(1),
	},
}));

const RightSidebar = () => {
	const classes = useStyles();

	const user = { firstName: 'James', lastName: 'Holden' };

	return (
		<div className={classes.container}>
			<UserDetail user={user} />
			<MessagesContainer />
		</div>
	);
};

export default RightSidebar;
