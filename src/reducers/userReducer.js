import {GET_USER} from '../actions';

function user(state = {}, action){
  console.log('user is called', action);
  switch(action.type){
    case GET_USER: 
      return action.user; 
    default: 
      return state; 
  }
  //return state; 
}

export default user;