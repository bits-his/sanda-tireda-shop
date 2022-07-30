import { combineReducers } from 'redux';
import authReducer from './auth';
import cartReducer from './shop';

const rootReducer = combineReducers({
  auth: authReducer,
  shop:cartReducer
});

export default rootReducer;
