import {combineReducers} from 'redux'; 

import posts from './postsReducer'; 
import user from './userReducer'; 
import blog from './blogsReducer';


const rootReducer = combineReducers({posts, user, blog}); 

export default rootReducer; 