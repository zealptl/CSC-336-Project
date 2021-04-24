/* eslint-disable react-hooks/rules-of-hooks */
import React, { useReducer } from 'react';
import axios from 'axios';
import GroupsContext from './groupsContext';
import GroupsReducer from './groupsReducer';
import {
	GET_GROUPS_FOR_USER,
	SEARCH_GROUPS,
	CLEAR_SEARCH,
	SET_CURRENT_GROUP,
	CREATE_GROUP,
	ADD_MEMBER,
} from '../types';

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

	const setCurrent = (group) => {
		dispatch({ type: SET_CURRENT_GROUP, payload: group });
	};

	const createGroup = async (groupData) => {
		try {
			const res = await axios.post(
				`http://localhost:8080/api/group/`,
				groupData
			);

			const groupUsers = await axios.get(
				`http://localhost:8080/api/groupUser/getUsersForGroup/${res.data.createdGroupId}`
			);

			const group = {
				groupid: res.data.createdGroupId,
				groupname: groupData.groupName,
				users: groupUsers.data.users,
			};

			dispatch({ type: CREATE_GROUP, payload: group });
		} catch (error) {
			console.log(error);
		}
	};

	const addMember = async (member) => {
		try {
			console.log('MEMBER:', member);
			const res = await axios.post(
				'http://localhost:8080/api/groupUser/',
				member
			);
			console.log('RES:', res.data);
			const groupUsers = await axios.get(
				`http://localhost:8080/api/groupUser/getUsersForGroup/${member.groupID}`
			);

			dispatch({
				type: ADD_MEMBER,
				payload: { groupid: member.groupID, users: groupUsers.data.users },
			});
		} catch (error) {
			console.log(error);
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
				searchGroups,
				clearSearch,
				setCurrent,
				createGroup,
				addMember,
			}}
		>
			{props.children}{' '}
		</GroupsContext.Provider>
	);
};

export default groupsState;
