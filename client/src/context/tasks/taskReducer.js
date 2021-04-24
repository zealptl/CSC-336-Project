import { CREATE_TASKS, GET_TASKS, UPDATE_TASK } from '../types';

const reducer = (state, action) => {
	switch (action.type) {
		case GET_TASKS:
			return {
				...state,
				tasks: action.payload,
				loading: false,
			};

		case CREATE_TASKS:
			const newState = state;

			newState.tasks[action.payload.taskArray] = [
				...state.tasks[action.payload.taskArray],
				action.payload.task,
			];
			return newState;

		case UPDATE_TASK:
			const updatedState = state;

			updatedState.tasks[action.payload.oldStatus] = state.tasks[
				action.payload.oldStatus
			].filter((t) => t.taskid !== action.payload.task.taskid);

			updatedState.tasks[action.payload.newStatus] = [
				...state.tasks[action.payload.newStatus],
				action.payload.task,
			];

			return updatedState;

		default:
			return state;
	}
};

export default reducer;
