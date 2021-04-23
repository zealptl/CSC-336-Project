/* eslint-disable react-hooks/rules-of-hooks */
import React, { useReducer } from 'react';
import axios from 'axios';
import GroupsContext from './groupsContext';
import GroupsReducer from './groupsReducer';
import { GET_GROUPS_FOR_USER, SEARCH_GROUPS, CLEAR_SEARCH } from '../types';

const groupsState = (props) => {
	const initialState = {
		groups: [],
		current: null,
		filtered: null,
		error: null,
		loading: true,
	};

	const [state, dispatch] = useReducer(GroupsReducer, initialState);

	// get groups for user
	const getGroupsForUser = async (email) => {
		try {
			const groups = await axios.get(
				`http://localhost:8080/api/groupUser/getGroupsForUser/${email}`
			);

			for (const group of groups.data.groups) {
				const groupUsers = await axios.get(
					`http://localhost:8080/api/groupUser/getUsersForGroup/${group.groupid}`
				);

				group['users'] = groupUsers.data.users;
			}

			dispatch({
				type: GET_GROUPS_FOR_USER,
				payload: groups.data.groups,
			});
		} catch (error) {
			console.error(error);
		}
	};

	const searchGroups = (text) =>
		dispatch({ type: SEARCH_GROUPS, payload: text });

	const clearSearch = () => {
		dispatch({ type: CLEAR_SEARCH });
	};

	return (
		<GroupsContext.Provider
			value={{
				groups: state.groups,
				current: state.current,
				filtered: state.filtered,
				error: state.error,
				loading: state.loading,
				getGroupsForUser,
				searchGroups,
				clearSearch,
			}}
		>
			{props.children}{' '}
		</GroupsContext.Provider>
	);
};

export default groupsState;
