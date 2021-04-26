import React, { useReducer } from 'react';
import * as axios from 'axios';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
// import setAuthToken from '../../utils/setAuthToken';

import {
	SIGNIN_SUCCESS,
	SIGNIN_FAIL,
	SIGNUP_SUCCESS,
	SIGNUP_FAIL,
	SIGNOUT,
	CLEAR_ERRORS,
	CLEAR_MSG,
} from '../types';

const AuthState = (props) => {
	const initialState = {
		isAuthenticated: null,
		loading: true,
		user: null,
		msg: null,
		error: null,
	};

	const [state, dispatch] = useReducer(AuthReducer, initialState);

	// load user
	const loadUser = async () => {
		// try {
		// 	const res = await axios.get('http://localhost:8080/api/auth/signin');
		// 	dispatch({
		// 		type: LOAD_USER,
		// 		payload: res.data,
		// 	});
		// } catch (error) {
		// 	// if server side crashes then axios request will fail and error.response will be undefined
		// 	// so we shouldn't pass error.response.data as property data of undefined cannot be called
		// 	const errMsg =
		// 		error.message === 'Network Error'
		// 			? 'Server Error'
		// 			: error.response.data.msg;
		// 	dispatch({
		// 		type: AUTH_ERROR,
		// 		payload: errMsg,
		// 	});
		// }
	};

	// Sign In User
	const signin = async (signinInfo) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		try {
			const res = await axios.post(
				`http://localhost:8080/api/auth/signin`,
				signinInfo,
				config
			);

			console.log('RES:', res.data);

			dispatch({
				type: SIGNIN_SUCCESS,
				payload: res.data,
			});

			loadUser();
		} catch (error) {
			// if server side crashes than axios request will fail and error.response will be undefined
			// so we shouldn't pass erroor.respoonse.data as property data of undefined cannot be called
			const errMsg =
				error.message === 'Network Error'
					? 'Server Error'
					: error.response.data.msg;

			dispatch({
				type: SIGNIN_FAIL,
				payload: errMsg,
			});
		}
	};

	// signup user
	const signup = async (formData) => {
		const config = {
			headers: { 'Content-Type': 'application/json' },
		};

		try {
			const res = await axios.post(
				`http://localhost:8080/api/auth/signup`,
				formData,
				config
			);

			dispatch({
				type: SIGNUP_SUCCESS,
				payload: res.data,
			});
		} catch (error) {
			// if server side crashes than axios request will fail and error.response will be undefined
			// so we shouldn't pass erroor.respoonse.data as property data of undefined cannot be called
			const errMsg =
				error.message === 'Network Error'
					? 'Server Error'
					: error.response.data.msg;

			dispatch({
				type: SIGNUP_FAIL,
				payload: errMsg,
			});
		}
	};

	// signout user
	const signout = () => dispatch({ type: SIGNOUT });

	// clear errors
	const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

	// clear msg
	const clearMsg = () => dispatch({ type: CLEAR_MSG });

	return (
		<AuthContext.Provider
			value={{
				isAuthenticated: state.isAuthenticated,
				loading: state.loading,
				user: state.user,
				error: state.error,
				msg: state.msg,
				signin,
				signup,
				signout,
				loadUser,
				clearErrors,
				clearMsg,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthState;
