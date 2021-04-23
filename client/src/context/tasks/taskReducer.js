import { GET_TASKS } from '../types';

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

		default:
			return state;
	}
};

export default reducer;
