import {combineReducers} from 'redux'; 

import posts from './postsReducer'; 
import user from './userReducer'; 
import blogs from './blogsReducer';


const rootReducer = combineReducers({posts, user, blogs}); 

export default rootReducer; 