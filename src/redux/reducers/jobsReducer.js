import {types} from '../actions/types';

const initialState = {
  loading: false,
  data: {},
  error: {},
};

// eslint-disable-next-line no-undef
export default jobsReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case types.GET_JOBS:
      return {
        ...state,
        loading: true,
      };
    case types.GET_JOBS_SUCCESS:
      return {
        ...state,
        data: payload,
        error: {},
        loading: false,
      };
    case types.GET_JOBS_FAILURE:
      return {
        ...state,
        loading: false,
        data: {},
        error: payload,
      };
    case types.GET_JOBS_RESET:
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
