import {combineReducers} from 'redux';
import generalReducer from './generalReducer';
import jobsDetailReducer from './jobsDetailReducer';
import jobsReducer from './jobsReducer';
import loginReducer from './loginReducer';
import mapsReducer from './mapsReducer';

export default combineReducers({
  generalReducer,
  mapsReducer,
  loginReducer,
  jobsReducer,
  jobsDetailReducer,
});
