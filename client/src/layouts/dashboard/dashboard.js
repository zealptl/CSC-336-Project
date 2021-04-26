import React, { useEffect, useContext } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { Widget as ChatWidget, addUserMessage, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import UserContext from '../../context/users/userContext'
import AuthContext from '../../context/auth/authContext'
import GroupsContext from '../../context/groups/groupsContext'

import { io } from 'socket.io-client';

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
	
	const userContext = useContext(UserContext);
	const {
		messages,
		getMessagesByGroup,
        postToMessage,
	} = userContext;
	
	const authContext = useContext(AuthContext);
	const {
		user,
	} = authContext;
	
	const groupsContext = useContext(GroupsContext);
	const {
		current,
	} = groupsContext;
	
	useEffect(() => {
		const socket = io('http://localhost:8080');
		
		if (user)
			socket.emit('joinChat', user.email);
		
		socket.on('messageReceived', (message) => {
			addResponseMessage(message.body);
		});
	}, []);
	
	useEffect(() => {
		if (user && current && messages.length === 0)
			getMessagesByGroup(current.groupid);
		// eslint-disable-next-line
	  }, []);
	  
	if (messages.length > 0 && current) {
		let messagesSet = [...new Set(messages)]; // turn into set to remove duplicates
	
		for (const message of messagesSet) {
			if (message.groupid === current.groupid) {
				if (user && message.useremail === user.email)
					addUserMessage(message.body);
				else addResponseMessage(message.body);
			}
		}
	}
	
	const handleNewUserMessage = (userMessage) => {
		const formattedMessage = {
			userEmail: user.email,
			groupID: current.groupid,
			body: userMessage,
		}
		
		postToMessage(formattedMessage);
	};

	return (
		<div>
			<Grid container spacing={3} className={classes.main}>
				<Grid item xs={12} sm={3} className={classes.itemContainer}>
					<Sidebar />
				</Grid>

				<Grid item xs={12} sm={9} className={classes.itemContainer}>
					<TasksSection />
				</Grid>
			</Grid>

			<ChatWidget 
				title='The Rocinante Crew' 
				subtitle='' 
				handleNewUserMessage = { handleNewUserMessage }/>
		</div>
	);
};

export default Dashboard;
