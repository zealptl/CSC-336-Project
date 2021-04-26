/* eslint-disable react-hooks/rules-of-hooks */
import React, { useReducer } from 'react';
import axios from 'axios';
import UserContext from './userContext';
import UserReducer from './userReducer';
import { GET_MESSAGES, CREATE_MESSAGES, CLEAR_MESSAGES } from '../types';

const userState = (props) => {
	const initialState = {
		messages: [],

		current: null,
		error: null,
		loading: true,
	};

	const [state, dispatch] = useReducer(UserReducer, initialState);

	const getMessagesByGroup = async (groupID) => {
		try {
			const res = await axios.get(
				`http://localhost:8080/api/message/getMessagesFromGroup/${groupID}`
			);

			dispatch({
				type: GET_MESSAGES,
				payload: res.data.messages,
			});
		} catch (error) {
			console.log(error);
		}
	};

	const postToMessage = async (postData) => {
		try {
			const res = await axios.post(
				`http://localhost:8080/api/message/`,
				postData
			);

			dispatch({
				type: CREATE_MESSAGES,
				payload: res.data.message,
			});
		} catch (error) {
			console.log(error.response.data.msg);
		}
	};

	const clearMessages = () => {
		dispatch({ type: CLEAR_MESSAGES });
	};

	return (
		<UserContext.Provider
			value={{
				messages: state.messages,
				getMessagesByGroup,
				postToMessage,
				clearMessages,
			}}
		>
			{props.children}{' '}
		</UserContext.Provider>
	);
};

export default userState;
