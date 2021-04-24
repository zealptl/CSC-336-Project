import { CREATE_TASKS, GET_TASKS, UPDATE_TASK } from '../types';

const reducer = (state, action) => {
	switch (action.type) {
		case GET_TASKS:
			return {
				...state,
				toDoTasks: action.payload.toDoTasks,
				inProgressTasks: action.payload.inProgressTasks,
				doneTasks: action.payload.doneTasks,
				loading: false,
			};

		case CREATE_TASKS:
			state[action.payload.status] = [
				...state[action.payload.status],
				action.payload.task,
			];

			return { ...state };

		case UPDATE_TASK:
			const updatedState = state;

			updatedState[action.payload.oldStatus] = state[
				action.payload.oldStatus
			].filter((t) => t.taskid !== action.payload.task.taskid);

			updatedState[action.payload.newStatus] = [
				...state[action.payload.newStatus],
				action.payload.task,
			];

			return { ...updatedState };

		default:
			return state;
	}
};

export default reducer;
