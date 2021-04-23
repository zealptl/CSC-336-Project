/* eslint-disable react-hooks/rules-of-hooks */
import React, { useReducer } from 'react';
import axios from 'axios';
import TasksContext from './tasksContext';
import TasksReducer from './taskReducer';
import { GET_TASKS } from '../types';

const tasksState = (props) => {
	const initialState = {
		toDoTasks: [],
		inProgressTasks: [],
		doneTasks: [],
		current: null,
		error: null,
		loading: true,
	};

	const [state, dispatch] = useReducer(TasksReducer, initialState);

	const getTasks = async (groupid) => {
		console.log('IN GET TASKS');
		const tasks = await axios.get(
			`http://localhost:8080/api/task/getTasksFromGroup/${groupid}`
		);

		console.log(tasks.data);

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

	return (
		<TasksContext.Provider
			value={{
				toDoTasks: state.toDoTasks,
				inProgressTasks: state.inProgressTasks,
				doneTasks: state.doneTasks,
				current: state.current,
				error: state.error,
				loading: state.loading,
				getTasks,
			}}
		>
			{props.children}{' '}
		</TasksContext.Provider>
	);
};

export default tasksState;
