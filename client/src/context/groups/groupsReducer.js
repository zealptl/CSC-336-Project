import {
	ADD_MEMBER,
	CLEAR_GROUPS,
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

		case CLEAR_GROUPS:
			console.log('IN CLEAR GROUPS');
			return {
				groups: [],
				current: null,
				filtered: null,
				error: null,
				loading: true,
			};

		case SET_CURRENT_GROUP:
			console.log('IN SET CURRENT REDUCER');
			return {
				...state,
				current: action.payload,
			};

		case CREATE_GROUP:
			return {
				...state,
				groups: [...state.groups, action.payload],
			};

		case ADD_MEMBER:
			const group = state.groups.find(
				(g) => g.groupid === action.payload.groupid
			);
			group.users = action.payload.users;
			return {
				...state,
				groups: state.groups.map((g) => ({
					...g,
					users:
						g.groupid === action.payload.groupid
							? action.payload.users
							: g.users,
				})),
			};

		default:
			return state;
	}
};

export default reducer;
