import React, { useEffect, useContext } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { Widget as ChatWidget } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

import GroupsContext from '../../context/groups/groupsContext';

import { Sidebar, TasksSection } from '../../components';

const useStyles = makeStyles((theme) => ({
	main: {
		height: '100vh',
		width: '100vw',
		backgroundColor: theme.palette.component.main,
		margin: theme.spacing(0),
	},
	itemContainer: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
	},
}));

const Dashboard = () => {
	const classes = useStyles();

	const groupsContext = useContext(GroupsContext);
	const { groups, getGroupsForUser } = groupsContext;
	const user = { email: 'cathcart@gmail.com' };

	useEffect(() => {
		if (user && groups.length === 0) {
			getGroupsForUser(user.email);
		}
		// eslint-disable-next-line
	}, [user, groups]);

	return (
		<div>
			<Grid container spacing={3} className={classes.main}>
				<Grid item xs={12} sm={3} className={classes.itemContainer}>
					<Sidebar groups={groups} />
				</Grid>

				<Grid item xs={12} sm={9} className={classes.itemContainer}>
					{/* <TasksSection group={groups[0]} /> */}
				</Grid>
			</Grid>

			<ChatWidget title='The Rocinante Crew' subtitle='' />
		</div>
	);
};

export default Dashboard;
