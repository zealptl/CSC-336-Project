import React from 'react';
import { makeStyles } from '@material-ui/core';

import { GroupListItem } from './index';

const useStyles = makeStyles((theme) => ({
	container: {
		marginTop: '10%',
		height: '400px',
		overflow: 'auto',
	},
}));

const GroupList = ({ groups }) => {
	const classes = useStyles();

	return (
		<ul className={classes.container}>
			{groups.map((group) => (
				<GroupListItem group={group} />
			))}
		</ul>
	);
};

export default GroupList;
