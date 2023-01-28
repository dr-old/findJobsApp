import {types} from '../actions/types';

const initialState = {
  loading: false,
  data: {},
  error: {},
};

// eslint-disable-next-line no-undef
export default loginReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case types.GET_LOGIN:
      return {
        ...state,
        loading: true,
      };
    case types.GET_LOGIN_SUCCESS:
      return {
        ...state,
        data: payload,
        error: {},
        loading: false,
      };
    case types.GET_LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        data: {},
        error: payload,
      };
    case types.GET_LOGIN_RESET:
      return {
        ...state,
        loading: false,
        data: {},
        error: {},
      };
    default:
      return state;
  }
};
