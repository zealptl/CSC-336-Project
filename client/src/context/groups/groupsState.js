/* eslint-disable react-hooks/rules-of-hooks */
import React, { useReducer } from 'react';
import axios from 'axios';
import GroupsContext from './groupsContext';
import GroupsReducer from './groupsReducer';
import { GET_GROUPS_FOR_USER } from '../types';

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
			const groupsIds = await axios.get(
				`http://localhost:8080/api/groupUser/getGroupsForUser/${email}`
			);

			let groups = groupsIds.data.groups.map((groupId) =>
				axios.get(
					`http://localhost:8080/api/group/getGroupById/${groupId.groupid}`
				)
			);

			groups = await Promise.all(groups);

			const groupsForUser = groups.map((group) => group.data.group[0]);

			dispatch({
				type: GET_GROUPS_FOR_USER,
				payload: groupsForUser,
			});
		} catch (error) {
			console.error(error);
		}
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
			}}
		>
			{props.children}{' '}
		</GroupsContext.Provider>
	);
};

export default groupsState;
