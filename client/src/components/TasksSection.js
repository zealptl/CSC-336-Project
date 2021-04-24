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
import { Autocomplete } from '@material-ui/lab';

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
	const {
		createTask,
		toDoTasks,
		inProgressTasks,
		doneTasks,
		updateTask,
	} = tasksContext;
	const allTasks = [...toDoTasks, ...inProgressTasks, ...doneTasks];

	const user = { email: 'yossarian@gmail.com' };

	const [open, setOpen] = useState(false);
	const [addMemberOpen, setAddMemberOpen] = useState(false);
	const [moveTaskOpen, setMoveTaskOpen] = useState(false);

	const [task, setTask] = useState({
		task: '',
		currentStatus: '',
	});
	const [newUserEmail, setNewUserEmail] = useState('');
	const [moveTask, setMoveTask] = useState({
		task: undefined,
		newStatus: '',
	});

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

	const handleMoveTaskOpen = () => {
		setMoveTaskOpen(true);
	};

	const handleNewTaskClose = () => {
		setOpen(false);
	};

	const handleNewMemberClose = () => {
		setAddMemberOpen(false);
	};

	const handleMoveTaskClose = () => {
		setMoveTaskOpen(false);
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

	const update = () => {
		setMoveTaskOpen(false);

		updateTask({
			oldStatus: moveTask.task.currentstatus,
			newStatus: moveTask.newStatus,
			taskid: moveTask.task.taskid,
			task: moveTask.task.task,
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
					aria-label='move-task'
					onClick={handleMoveTaskOpen}
					className={[classes.button, classes.addMemberButton]}
				>
					Move Task
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

			<Dialog
				maxWidth='sm'
				fullWidth
				open={open}
				aria-labelledby='form-dialog-title'
			>
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
				fullWidth
				maxWidth='sm'
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

			<Dialog
				maxWidth='sm'
				fullWidth
				open={moveTaskOpen}
				aria-labelledby='move-task-form-dialog-title'
			>
				<DialogTitle id='move-task-form-dialog-title'>Move Task</DialogTitle>
				<DialogContent>
					<Autocomplete
						options={allTasks}
						getOptionLabel={(option) => option.task}
						renderInput={(params) => (
							<TextField {...params} label='Task to move' variant='outlined' />
						)}
						onChange={(e, newValue) =>
							setMoveTask({ ...moveTask, task: newValue })
						}
					/>

					<FormControl variant='outlined' fullWidth margin='normal'>
						<InputLabel>Move To</InputLabel>
						<Select
							native
							required
							label='Move To'
							onChange={(e) =>
								setMoveTask({ ...moveTask, newStatus: e.target.value })
							}
							inputProps={{
								name: 'newStatus',
								id: 'newStatus',
							}}
						>
							<option aria-label='None' value='' />
							<option value='To Do'>To Do</option>
							<option value='In Progress'>In Progress</option>
							<option value='Done'>Done</option>
						</Select>
					</FormControl>

					<DialogActions>
						<Button onClick={handleMoveTaskClose} color='primary'>
							Cancel
						</Button>
						<Button onClick={update} color='primary'>
							Move
						</Button>
					</DialogActions>
				</DialogContent>
			</Dialog>

			<TasksColumnsContainer group={current} />
		</div>
	);
};

export default TasksSection;
