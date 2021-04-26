import {
	SIGNIN_SUCCESS,
	SIGNIN_FAIL,
	SIGNUP_SUCCESS,
	SIGNUP_FAIL,
	LOAD_USER,
	SIGNOUT,
	SIGNOUT_FAIL,
	AUTH_ERROR,
	CLEAR_ERRORS,
	CLEAR_MSG,
	SERVER_ERROR,
} from '../types';

const authReducer = (state, action) => {
	switch (action.type) {
		case SIGNIN_SUCCESS:
		case SIGNUP_SUCCESS:
			localStorage.setItem('user', JSON.stringify(action.payload.user));
			return {
				...state,
				user: action.payload.user,
				isAuthenticated: true,
				loading: false,
			};

		case SIGNOUT:
			localStorage.removeItem('user');
			return {
				...state,

				isAuthenticated: false,
				loading: false,
				user: null,
			};

		case LOAD_USER:
			return {
				...state,
				isAuthenticated: true,
				loading: false,
				user: action.payload.user,
			};

		case AUTH_ERROR:
		case SIGNIN_FAIL:
		case SIGNOUT_FAIL:
		case SIGNUP_FAIL:
		case SERVER_ERROR:
			return {
				...state,

				isAuthenticated: false,
				loading: false,
				user: null,
				error: action.payload,
			};

		case CLEAR_ERRORS:
			return {
				...state,
				error: null,
			};

		case CLEAR_MSG:
			return {
				...state,
				msg: null,
			};

		default:
			return state;
	}
};

export default authReducer;
