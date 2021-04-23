import React, { useContext, useEffect } from 'react';
import { Button, makeStyles } from '@material-ui/core';

import { AppLogo, GroupList, SearchAndAdd } from './index';

import GroupsContext from '../context/groups/groupsContext';

const useStyles = makeStyles((theme) => ({
	container: {
		position: 'relative',
		background: theme.palette.component.light,
		borderRadius: '20px',
		boxShadow: '4px 4px 8px rgba(1, 25, 47, 0.08)',
		height: '100%',
		padding: theme.spacing(2),
		marginLeft: theme.spacing(1),
	},
	signoutContianer: {
		display: 'flex',
		justifyContent: 'center',
		position: 'absolute',
		bottom: '16px',
		left: '30%',
	},
	signout: {
		border: `2px solid ${theme.palette.primary.main}`,
		borderRadius: '10px',

		'&:hover': {
			background: theme.palette.primary.main,
			color: '#FFF',
		},
	},
}));

const Sidebar = () => {
	const classes = useStyles();

	const groupsContext = useContext(GroupsContext);
	const { groups, filtered, getGroupsForUser } = groupsContext;
	const user = { email: 'yossarian@gmail.com' };

	useEffect(() => {
		if (user && groups.length === 0) {
			getGroupsForUser(user.email);
		}
		// eslint-disable-next-line
	}, [user, groups]);

	return (
		<div className={classes.container}>
			<AppLogo />
			<SearchAndAdd />
			<GroupList groups={filtered === null ? groups : filtered} />

			<div className={classes.signoutContianer}>
				<Button variant='outlined' className={classes.signout}>
					{' '}
					Sign Out
				</Button>
			</div>
		</div>
	);
};

export default Sidebar;
