import React from 'react'; 
import ReactDOM from 'react-dom'; 
import thunk from 'redux-thunk'; 

import App from './components/App'; 

import {createStore, applyMiddleware} from 'redux'; 
import {Provider} from 'react-redux'; 


import rootReducer from './reducers';


import { getUser, getBlogs } from './actions';

const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(() => console.log('store', store.getState())); 
store.dispatch(getUser("053a1d27-6480-4c8f-6ca6-08d4cb6d50fc"));
store.dispatch(getBlogs("053a1d27-6480-4c8f-6ca6-08d4cb6d50fc"))

ReactDOM.render(<Provider store={store}>
                  <App/>
                </Provider>
                ,document.getElementById('root'));