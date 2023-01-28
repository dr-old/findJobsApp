import {spawn} from 'redux-saga/effects';
import mapsSaga from './mapsSaga';
import jobsSaga from './jobsSaga';

export default function* rootSaga() {
  yield spawn(mapsSaga);
  yield spawn(jobsSaga);
}
