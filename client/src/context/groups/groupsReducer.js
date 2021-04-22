import { GET_GROUPS_FOR_USER } from '../types';

const reducer = (state, action) => {
	switch (action.type) {
		case GET_GROUPS_FOR_USER:
			return {
				...state,
				groups: action.payload,
			};

		default:
			return state;
	}
};

export default reducer;
