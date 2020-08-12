import { GITHUB_FINDER_TYPES } from '../types';

const GithubReducer = (state, action) => {
  switch (action.type) {
    case GITHUB_FINDER_TYPES.SET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case GITHUB_FINDER_TYPES.SET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case GITHUB_FINDER_TYPES.SET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    case GITHUB_FINDER_TYPES.SHOW_CLEAR_BTN:
      return {
        ...state,
        toggleClearBtn: true,
      };
    case GITHUB_FINDER_TYPES.HIDE_CLEAR_BTN:
      return {
        ...state,
        toggleClearBtn: false,
      };
    case GITHUB_FINDER_TYPES.SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GITHUB_FINDER_TYPES.SET_NOTIFICATION:
      return {
        ...state,
        notification: action.payload,
      };
    default:
      return state;
  }
};

export default GithubReducer;
