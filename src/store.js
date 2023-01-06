import { legacy_createStore as createStore} from 'redux'
import { applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { requestUsers, requestSingleUser } from './redux/reducer';
import { createLogger } from 'redux-logger';



const logger = createLogger();
const rootReducer = combineReducers({requestUsers,requestSingleUser})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware,logger))

