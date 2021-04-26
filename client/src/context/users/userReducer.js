import { GET_MESSAGES, CREATE_MESSAGES, CLEAR_MESSAGES } from '../types';

const reducer = (state, action) => {
	switch (action.type) {
		case GET_MESSAGES:
			return {
				...state,
				messages: action.payload,
			};

		case CREATE_MESSAGES:
			return {
				...state,
				//messages: [...state.messages, action.payload],
			};

		case CLEAR_MESSAGES:
			return {
				...state,
				messages: [],
			};

		default:
			return state;
	}
};

export default reducer;
