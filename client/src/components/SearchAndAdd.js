import React, { useContext, useRef, useState, useEffect } from 'react';
import {
	Button,
	TextField,
	Dialog,
	DialogActions,
	DialogTitle,
	List,
	ListItem,
	ListItemText,
	makeStyles,
	DialogContent,
} from '@material-ui/core';

import GroupsContext from '../context/groups/groupsContext';
import AuthContext from '../context/auth/authContext';

const useStyles = makeStyles((theme) => ({
	container: {
		marginTop: '25%',
	},
	textField: {
		height: '38px',
		width: '180px',
		marginRight: theme.spacing(2),
		padding: theme.spacing(1),
		borderRadius: '4px',
		background: 'none',
		border: `2px solid ${theme.palette.component.dark}`,
		textDecoration: 'none',
		transition: 'all 0.2s ease',
		'&:focus': {
			border: `2px solid ${theme.palette.primary.main}`,
			outline: 'none',
		},
	},
	button: {
		border: `2px solid ${theme.palette.primary.main}`,
		borderRadius: '10px',
		marginLeft: theme.spacing(2),
		'&:hover': {
			background: theme.palette.primary.main,
			color: '#FFF',
		},
	},
	listItem: {
		background: theme.palette.component.main,
		margin: theme.spacing(1),
		borderRadius: '4px',
	},
}));

const SearchAndAdd = () => {
	const classes = useStyles();

	const groupsContext = useContext(GroupsContext);
	const { searchGroups, clearSearch, createGroup } = groupsContext;

	const authContext = useContext(AuthContext);
	const { user } = authContext;

	const text = useRef();

	const [open, setOpen] = useState(false);
	const [newGroupData, setNewGroupData] = useState({
		groupName: '',
		userEmail: '',
	});

	const [userEmails, setUserEmails] = useState([]);

	useEffect(() => {
		if (user) {
			setUserEmails([...userEmails, user.email]);
		}

		// eslint-disable-next-line
	}, [user]);

	const onChange = (e) => {
		if (text.current.value !== '') {
			searchGroups(e.target.value);
		} else {
			clearSearch();
		}
	};

	const onChangeGroupData = (e) => {
		setNewGroupData({ ...newGroupData, [e.target.name]: e.target.value });
	};

	const onAddUserButtonClick = (e) => {
		e.preventDefault();
		if (newGroupData.userEmail) {
			setUserEmails([...userEmails, newGroupData.userEmail]);
		}
		setNewGroupData({ ...newGroupData, userEmail: '' });
	};

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const create = () => {
		setOpen(false);
		createGroup({ groupName: newGroupData.groupName, users: userEmails });
	};

	return (
		<div className={classes.container}>
			<input
				variant='outlined'
				id='search'
				label='Search'
				ref={text}
				type='text'
				size='small'
				onChange={onChange}
				placeholder='Search'
				className={classes.textField}
			/>

			{/* Create New Group Component */}
			<Button
				variant='outline'
				size='large'
				color='primary'
				aria-label='add'
				className={classes.button}
				onClick={handleClickOpen}
			>
				+ New
			</Button>
			<Dialog
				open={open}
				onClose={handleClose}
				maxWidth='sm'
				fullWidth
				aria-labelledby='form-dialog-title'
			>
				<DialogTitle id='form-dialog-title'>Create New Group</DialogTitle>
				<DialogContent>
					{/* <h4>Please add your email as well</h4> */}
					<TextField
						variant='outlined'
						margin='normal'
						required
						fullWidth
						id='groupName'
						label='Group Name'
						name='groupName'
						onChange={onChangeGroupData}
					/>

					<TextField
						variant='outlined'
						margin='normal'
						id='userEmail'
						name='userEmail'
						label='User Email'
						placeholder='johndoe@gmail.com'
						value={newGroupData.userEmail}
						fullWidth
						onChange={onChangeGroupData}
					/>
					<Button color='primary' onClick={onAddUserButtonClick}>
						Add Member
					</Button>

					<List>
						{userEmails.map((u) => (
							<ListItem className={classes.listItem}>
								<ListItemText>{u}</ListItemText>
							</ListItem>
						))}
					</List>

					<DialogActions>
						<Button onClick={handleClose} color='primary'>
							Cancel
						</Button>
						<Button onClick={create} color='primary'>
							Create
						</Button>
					</DialogActions>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default SearchAndAdd;
