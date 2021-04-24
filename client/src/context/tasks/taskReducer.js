import { CREATE_TASKS, GET_TASKS } from '../types';

const reducer = (state, action) => {
	switch (action.type) {
		case GET_TASKS:
			return {
				...state,
				tasks: action.payload,
				loading: false,
			};

		case CREATE_TASKS:
			const newState = {
				...state,
			};
			newState.tasks[action.payload.taskArray] = [
				...state.tasks[action.payload.taskArray],
				action.payload.task,
			];
			return newState;

		default:
			return state;
	}
};

export default reducer;
