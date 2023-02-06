import {types} from '../actions/types';

const initialState = {
  loading: false,
  data: {},
  error: {},
};

// eslint-disable-next-line no-undef
export default jobsDetailReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case types.GET_JOBS_DETAIL:
      return {
        ...state,
        loading: true,
      };
    case types.GET_JOBS_DETAIL_SUCCESS:
      return {
        ...state,
        data: payload,
        error: {},
        loading: false,
      };
    case types.GET_JOBS_DETAIL_FAILURE:
      return {
        ...state,
        loading: false,
        data: {},
        error: payload,
      };
    case types.GET_JOBS_DETAIL_RESET:
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
