import {GET_BLOGS} from '../actions';

function blogs(state = [], action){
  console.log('action', action);
  switch(action.type){
    case GET_BLOGS: 
      return action.blogs; 
    default: 
      return state; 
  }
  //return state; 
}

export default blogs;