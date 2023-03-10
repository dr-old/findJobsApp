import {put, call, takeLatest} from 'redux-saga/effects';
import {types} from '../actions/types';
import {getApi} from '../apis/baseApi';

function* fetchJobs({payload}) {
  const response = yield call(getApi, payload);
  if (response?.length > 0) {
    yield put({
      type: types.GET_JOBS_SUCCESS,
      payload: {data: response},
    });
  } else {
    yield put({type: types.GET_JOBS_FAILURE, payload: response});
  }
}

function* fetchJobsDetail({payload}) {
  const response = yield call(getApi, payload);
  if (response?.id) {
    yield put({
      type: types.GET_JOBS_DETAIL_SUCCESS,
      payload: {data: response},
    });
  } else {
    yield put({type: types.GET_JOBS_DETAIL_FAILURE, payload: response});
  }
}

export default function* mapsSaga() {
  yield takeLatest(types.GET_JOBS, fetchJobs);
  yield takeLatest(types.GET_JOBS_DETAIL, fetchJobsDetail);
}
