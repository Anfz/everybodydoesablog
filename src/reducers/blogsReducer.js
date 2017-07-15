import {GET_BLOG} from '../actions';

function blog(state = [], action){
  console.log('action', action);
  switch(action.type){
    case GET_BLOG: 
      
      return action.blog; 
    default: 
      return state; 
  }
  //return state; 
}

export default blog;