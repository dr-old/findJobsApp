import {types} from './types';

export function fetchJobsData(data) {
  return {
    type: types.GET_JOBS,
    payload: data,
  };
}
