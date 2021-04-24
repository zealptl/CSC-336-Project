import React, { useReducer } from 'react';
import * as axios from 'axios';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import setAuthToken from '../../utils/setAuthToken';

import {
  SIGNIN_SUCCESS,
  SIGNIN_FAIL,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOAD_USER,
  SIGNOUT,
  SIGNOUT_FAIL,
  AUTH_ERROR,
  SUBTRACT_BALANCE,
  SET_BALANCE,
  CLEAR_ERRORS,
  CLEAR_MSG,
  SERVER_ERROR,
} from '../types';

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
    msg: null,
    error: null,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  // load user
  const loadUser = async () => {
    setAuthToken(localStorage.token);

    try {
      const res = await axios.get('http://localhost:8080/api/auth/signin');

      dispatch({
        type: LOAD_USER,
        payload: res.data,
      });
    } catch (error) {
      // if server side crashes then axios request will fail and error.response will be undefined
      // so we shouldn't pass error.response.data as property data of undefined cannot be called
      const errMsg =
        error.message === 'Network Error'
          ? 'Server Error'
          : error.response.data.msg;

      dispatch({
        type: AUTH_ERROR,
        payload: errMsg,
      });
    }
  };

  // Sign In User
  const signin = async (email, password) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post(
        `http://localhost:8080/api/auth/signin`,
        {
          email,
          password,
        },
        config
      );
      
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

    const {
      firstName,
      lastName,
      email,
      password,
    } = formData;

    try {
      const res = await axios.post(
        `http://localhost:8080/api/auth/signup`,
        {
          firstName,
          lastName,
          email,
          password,
        },
        config
      );

      dispatch({
        type: SIGNUP_SUCCESS,
        payload: res.data.msg,
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
        token: state.token,
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