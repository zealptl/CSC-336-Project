/* eslint-disable react-hooks/rules-of-hooks */
import React, { useReducer } from 'react';
import axios from 'axios';
import TasksContext from './tasksContext';
import TasksReducer from './taskReducer';
import { CREATE_TASKS, GET_TASKS, UPDATE_TASK } from '../types';

const tasksState = (props) => {
	const initialState = {
		tasks: {
			toDoTasks: [],
			inProgressTasks: [],
			doneTasks: [],
		},
		current: null,
		error: null,
		loading: true,
	};

	const [state, dispatch] = useReducer(TasksReducer, initialState);

	const getTasks = async (groupid) => {
		const tasks = await axios.get(
			`http://localhost:8080/api/task/getTasksFromGroup/${groupid}`
		);

		const sortedTasks = { toDoTasks: [], inProgressTasks: [], doneTasks: [] };

		tasks.data.tasks.forEach((task) => {
			if (task.currentstatus === 'To Do') {
				sortedTasks.toDoTasks.push(task);
			} else if (task.currentstatus === 'In Progress') {
				sortedTasks.inProgressTasks.push(task);
			} else if (task.currentstatus === 'Done') {
				sortedTasks.doneTasks.push(task);
			}
		});

		dispatch({ type: GET_TASKS, payload: sortedTasks });
	};

	const createTask = async (task) => {
		try {
			const res = await axios.post('http://localhost:8080/api/task/', task);

			const taskRes = await axios.get(
				`http://localhost:8080/api/task/getTaskFromId/${res.data.createdTaskId}`
			);

			let type = '';

			if (taskRes.data.task.currentstatus === 'To Do') {
				type = 'toDoTasks';
			} else if (taskRes.data.task.currentstatus === 'In Progress') {
				type = 'inProgressTasks';
			} else if (taskRes.data.task.currentstatus === 'Done') {
				type = 'doneTasks';
			}

			dispatch({
				type: CREATE_TASKS,
				payload: { task: taskRes.data.task, taskArray: type },
			});
		} catch (error) {
			console.log(error);
		}
	};

	const updateTask = async (update) => {
		try {
			console.log('UPDATE:', update);
			const res = await axios.patch(
				`http://localhost:8080/api/task/${update.taskid}`,
				{
					currentStatus: update.newStatus,
					task: update.task,
				}
			);

			console.log('RES:', res.data);

			const updatedTask = await axios.get(
				`http://localhost:8080/api/task/getTaskFromId/${update.taskid}`
			);

			console.log('UPDATED:', updatedTask.data);

			let oldStatus = '';
			let newStatus = '';

			if (update.oldStatus === 'To Do') {
				oldStatus = 'toDoTasks';
			} else if (update.oldStatus === 'In Progress') {
				oldStatus = 'inProgressTasks';
			} else if (update.oldStatus === 'Done') {
				oldStatus = 'doneTasks';
			}

			if (update.newStatus === 'To Do') {
				newStatus = 'toDoTasks';
			} else if (update.newStatus === 'In Progress') {
				newStatus = 'inProgressTasks';
			} else if (update.newStatus === 'Done') {
				newStatus = 'doneTasks';
			}

			dispatch({
				type: UPDATE_TASK,
				payload: {
					oldStatus,
					newStatus,
					task: updatedTask.data.task,
				},
			});
		} catch (error) {}
	};

	return (
		<TasksContext.Provider
			value={{
				tasks: state.tasks,
				current: state.current,
				error: state.error,
				loading: state.loading,
				getTasks,
				createTask,
				updateTask,
			}}
		>
			{props.children}{' '}
		</TasksContext.Provider>
	);
};

export default tasksState;
