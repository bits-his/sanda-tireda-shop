import {
  SET_USER,
  LOADING_LOGIN,
  LOADING_SIGNUP,
//   START_LOADING_APP,
//   STOP_LOADING_APP,
  SET_AUTH_ERROR,
  LOGOUT,
  CLEAR_AUTH_ERROR,
  ERROR_MESSAGE
} from '../action/type';

const initialState = {
  authenticated: false,
  user: {},
  loadingLogin: false,
  loadingSignup: false,
  requestIsValid: true,
  error: '',
  loadingApp: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
        authenticated: true,
      };
    case LOADING_LOGIN:
      return {
        ...state,
        loadingLogin: !state.loadingLogin,
      };
      case ERROR_MESSAGE:
        return{
          ...state,
          error:action.payload
        };
    case LOADING_SIGNUP:
      return {
        ...state,
        loadingSignup: !state.loadingSignup,
      };
    case SET_AUTH_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case CLEAR_AUTH_ERROR:
      return {
        ...state,
        error: '',
      };
    case LOGOUT:
      return {
        ...state,
        authenticated: false,
        user: {},
      };
    default:
      return state;
  }
};
