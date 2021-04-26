import { GET_MESSAGES, CREATE_MESSAGES } from '../types';

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
                messages: [...state.messages, action.payload],
            }

		default:
			return state;
	}
};

export default reducer;
