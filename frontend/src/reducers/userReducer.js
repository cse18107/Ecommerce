import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTER_REQUEST,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOAD_USER_REQUEST,
  CLEAR_ERRORS,
} from "../constants/userConstants";

export const userReducer = (state = { user: {} }, action) => {
  console.log(state);
  switch (action.type) {
    case LOGIN_REQUEST:
    case REGISTER_REQUEST:
      case LOAD_USER_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      case LOAD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };
    case LOGIN_FAIL:
    case REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };
    case LOAD_USER_FAIL:
      return {
        ...state,
        loading:false,
        isAuthenticated:true,
        user:null,
        error:action.payload
      }
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
