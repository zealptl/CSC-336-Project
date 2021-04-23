import React, { useContext, useState } from 'react';
import {
	Button,
	makeStyles,
	Dialog,
	DialogActions,
	DialogTitle,
	DialogContent,
	TextField,
	Select,
	FormControl,
	InputLabel,
	Input,
} from '@material-ui/core';

import { GroupDetails, TasksColumnsContainer } from './index';

import GroupsContext from '../context/groups/groupsContext';

const useStyles = makeStyles((theme) => ({
	container: {
		background: theme.palette.component.light,
		borderRadius: '20px',
		boxShadow: '4px 4px 8px rgba(1, 25, 47, 0.08)',
		height: '100%',
		padding: theme.spacing(2),
		marginRight: theme.spacing(1),
	},
	buttonContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: theme.spacing(5.5),
	},
	button: {
		borderRadius: '10px',
	},
	addMemberButton: {
		border: `2px solid ${theme.palette.primary.main}`,

		'&:hover': {
			background: theme.palette.primary.main,
			color: '#FFF',
		},
	},
}));

const TasksSection = () => {
	const classes = useStyles();

	const groupsContext = useContext(GroupsContext);
	const { current } = groupsContext;
	const user = { email: 'yossarian@gmail.com' };

	const [open, setOpen] = useState(false);
	const [task, setTask] = useState({
		task: '',
		status: '',
	});

	const onChange = (e) =>
		setTask({
			...task,
			[e.target.name]: e.target.value,
		});

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const create = () => {
		setOpen(false);
		console.log({ groupID: current.groupid, userEmail: user.email, ...task });
		// createGroup({ groupName: newGroupData.groupName, users: userEmails });
	};

	return (
		<div className={classes.container}>
			<GroupDetails group={current} />

			<div className={classes.buttonContainer}>
				<Button
					variant='contained'
					color='primary'
					aria-label='add'
					onClick={handleClickOpen}
					className={classes.button}
				>
					+ New Task
				</Button>

				<Button
					variant='outlined'
					color='primary'
					className={[classes.button, classes.addMemberButton]}
				>
					+ Add Member
				</Button>
			</div>

			<Dialog open={open} aria-labelledby='form-dialog-title'>
				<DialogTitle id='form-dialog-title'>Create New Task</DialogTitle>
				<DialogContent>
					<TextField
						variant='outlined'
						margin='normal'
						required
						fullWidth
						id='task'
						label='Task'
						name='task'
						onChange={onChange}
					/>

					<FormControl variant='outlined' fullWidth margin='normal'>
						<InputLabel>Current Status</InputLabel>
						<Select
							native
							required
							label='Current Status'
							onChange={onChange}
							inputProps={{
								name: 'status',
								id: 'status',
							}}
						>
							<option aria-label='None' value='' />
							<option value='To Do'>To Do</option>
							<option value='In Progress'>In Progress</option>
							<option value='Done'>Done</option>
						</Select>
					</FormControl>

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

			<TasksColumnsContainer group={current} />
		</div>
	);
};

export default TasksSection;
