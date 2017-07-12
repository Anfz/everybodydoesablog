import user_json from '../data/users.json';



function user(state = {}, action){
  //got nothing to do anyway :D 
  return user_json.filter(user => user.id === 0)[0];
  //return state; 
}

export default user;