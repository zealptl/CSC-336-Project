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
} from '@material-ui/core';

import { GroupDetails, TasksColumnsContainer } from './index';

import GroupsContext from '../context/groups/groupsContext';
import TasksContext from '../context/tasks/tasksContext';

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
	dialog: {
		width: '600px',
		height: '400px',
	},
}));

const TasksSection = () => {
	const classes = useStyles();

	const groupsContext = useContext(GroupsContext);
	const { current, addMember } = groupsContext;

	const tasksContext = useContext(TasksContext);
	const { createTask } = tasksContext;

	const user = { email: 'yossarian@gmail.com' };

	const [open, setOpen] = useState(false);
	const [addMemberOpen, setAddMemberOpen] = useState(false);

	const [task, setTask] = useState({
		task: '',
		currentStatus: '',
	});
	const [newUserEmail, setNewUserEmail] = useState('');

	const onChange = (e) =>
		setTask({
			...task,
			[e.target.name]: e.target.value,
		});

	const handleNewTaskOpen = () => {
		setOpen(true);
	};
	const handleNewMemberOpen = () => {
		setAddMemberOpen(true);
	};

	const handleNewTaskClose = () => {
		setOpen(false);
	};

	const handleNewMemberClose = () => {
		setAddMemberOpen(false);
	};

	const onNewMemberChange = (e) => {
		setNewUserEmail(e.target.value);
	};

	const create = () => {
		setOpen(false);

		createTask({
			groupID: current.groupid,
			userEmail: user.email,
			...task,
		});
	};

	const addNewMember = () => {
		setAddMemberOpen(false);

		addMember({
			groupID: current.groupid,
			userEmail: newUserEmail,
		});
	};

	return (
		<div className={classes.container}>
			<GroupDetails group={current} />

			<div className={classes.buttonContainer}>
				<Button
					variant='contained'
					color='primary'
					aria-label='add'
					onClick={handleNewTaskOpen}
					className={classes.button}
				>
					+ New Task
				</Button>

				<Button
					variant='outlined'
					color='primary'
					aria-label='add-member'
					onClick={handleNewMemberOpen}
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
								name: 'currentStatus',
								id: 'currentStatus',
							}}
						>
							<option aria-label='None' value='' />
							<option value='To Do'>To Do</option>
							<option value='In Progress'>In Progress</option>
							<option value='Done'>Done</option>
						</Select>
					</FormControl>

					<DialogActions>
						<Button onClick={handleNewTaskClose} color='primary'>
							Cancel
						</Button>
						<Button onClick={create} color='primary'>
							Create
						</Button>
					</DialogActions>
				</DialogContent>
			</Dialog>

			<Dialog
				open={addMemberOpen}
				aria-labelledby='addmember-form-dialog-title'
			>
				<DialogTitle id='addmember-form-dialog-title'>
					Add New Member
				</DialogTitle>
				<DialogContent>
					<TextField
						variant='outlined'
						margin='normal'
						required
						fullWidth
						onChange={onNewMemberChange}
						value={newUserEmail}
						id='newUserEmail'
						label='User Email'
						name='newUserEmail'
					/>
				</DialogContent>

				<DialogActions>
					<Button onClick={handleNewMemberClose} color='primary'>
						Cancel
					</Button>
					<Button onClick={addNewMember} color='primary'>
						Add
					</Button>
				</DialogActions>
			</Dialog>

			<TasksColumnsContainer group={current} />
		</div>
	);
};

export default TasksSection;
