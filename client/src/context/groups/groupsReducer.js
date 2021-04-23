import { CLEAR_SEARCH, GET_GROUPS_FOR_USER, SEARCH_GROUPS } from '../types';

const reducer = (state, action) => {
	switch (action.type) {
		case GET_GROUPS_FOR_USER:
			return {
				...state,
				groups: action.payload,
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

		default:
			return state;
	}
};

export default reducer;
