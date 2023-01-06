import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './container/App';
import { Provider} from 'react-redux';
import {store} from './store';
// import thunkMiddleware from 'redux-thunk';
// import {applyMiddleware, combineReducers} from 'redux';
// import { legacy_createStore as createStore} from 'redux'
// import { requestUsers } from './reducer';
// import { createLogger } from 'redux-logger';



// const logger = createLogger();
// const rootReducer = combineReducers({requestUsers})
// const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))
 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
    <Provider store={store}>
      <App />      
    </Provider> 
);


