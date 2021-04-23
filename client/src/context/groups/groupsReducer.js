import {
	CLEAR_SEARCH,
	CREATE_GROUP,
	GET_GROUPS_FOR_USER,
	SEARCH_GROUPS,
	SET_CURRENT_GROUP,
} from '../types';

const reducer = (state, action) => {
	switch (action.type) {
		case GET_GROUPS_FOR_USER:
			return {
				...state,
				groups: action.payload,
				current: action.payload[0],
			};

		case SEARCH_GROUPS:
			return {
				...state,
				filtered: state.groups.filter((group) => {
					const regex = new RegExp(`${action.payload}`, 'gi');
					return group.groupname.match(regex);
				}),
			};

		case CLEAR_SEARCH:
			return {
				...state,
				filtered: null,
			};

		case SET_CURRENT_GROUP:
			return {
				...state,
				current: action.payload,
			};

		case CREATE_GROUP:
			return {
				...state,
				groups: [...state.groups, action.payload],
			};

		default:
			return state;
	}
};

export default reducer;
