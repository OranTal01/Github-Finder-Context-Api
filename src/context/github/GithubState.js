import React, { useReducer } from 'react';
import axios from 'axios';

import { GITHUB_FINDER_TYPES } from '../types';

import GithubReducer from './githubReducer';
import GithubContext from './githubContext';

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    toggleClearBtn: false,
    notification: {},
  };
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  let githubClientId;
  let githubClientSecret;

  if (process.env.NODE_ENV !== 'production') {
    githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
    githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
  } else {
    githubClientId = process.env.GITHUB_CLIENT_ID;
    githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
  }

  // get random github users
  const getRandomUsers = async (_) => {
    setLoading();

    try {
      const res = await axios.get(
        `https://api.github.com/users?client_id=${githubClientId}&client_secret=${githubClientSecret}`
      );
      dispatch({ type: GITHUB_FINDER_TYPES.SET_USERS, payload: res.data });
    } catch (error) {
      throw new Error('Something wont wrong with fetch users github users');
    }
  };

  // search github user
  const searchUser = async (text) => {
    setLoading();
    try {
      const res = await axios.get(
        `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
      );
      dispatch({
        type: GITHUB_FINDER_TYPES.SET_USERS,
        payload: res.data.items,
      });
      showSearchClearBTn();
    } catch (error) {
      throw new Error('Something wont wrong with search user');
    }
  };

  //get github user details
  const getUserDetails = async (userName) => {
    setLoading();

    try {
      const res = await axios.get(
        `https://api.github.com/users/${userName}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
      );
      dispatch({ type: GITHUB_FINDER_TYPES.SET_USER, payload: res.data });
    } catch (error) {
      throw new Error('Something wont wrong with get user bio');
    }
  };

  //get github user repos
  const getUserRepos = async (userName) => {
    setLoading();

    try {
      const res = await axios.get(
        `https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
      );
      dispatch({ type: GITHUB_FINDER_TYPES.SET_REPOS, payload: res.data });
    } catch (error) {
      throw new Error('Something wont wrong with get user repos');
    }
  };

  //show clear search button
  const showSearchClearBTn = (_) => {
    dispatch({ type: GITHUB_FINDER_TYPES.SHOW_CLEAR_BTN });
  };

  //hide clear search button
  const hideSearchClearBTn = (_) => {
    dispatch({ type: GITHUB_FINDER_TYPES.HIDE_CLEAR_BTN });
  };

  //set loading
  const setLoading = (_) => {
    dispatch({ type: GITHUB_FINDER_TYPES.SET_LOADING });
  };

  //set notification
  const setNotification = (msg, type) => {
    dispatch({
      type: GITHUB_FINDER_TYPES.SET_NOTIFICATION,
      payload: { msg, type },
    });
    setTimeout(() => {
      closeNotification();
    }, 5000);
  };

  // close notification
  const closeNotification = () => {
    dispatch({ type: GITHUB_FINDER_TYPES.SET_NOTIFICATION, payload: {} });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        toggleClearBtn: state.toggleClearBtn,
        notification: state.notification,
        getRandomUsers,
        searchUser,
        getUserDetails,
        getUserRepos,
        hideSearchClearBTn,
        setNotification,
        closeNotification,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
