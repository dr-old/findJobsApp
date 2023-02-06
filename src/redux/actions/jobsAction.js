import {types} from './types';

export function fetchJobsData(data) {
  return {
    type: types.GET_JOBS,
    payload: data,
  };
}

export function fetchJobsDetailData(data) {
  return {
    type: types.GET_JOBS_DETAIL,
    payload: data,
  };
}
