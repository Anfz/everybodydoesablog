import posts_json from '../data/posts.json';

import { ADD_BLOG_POST } from '../actions';

function posts(state = posts_json, action){
  //got nothing to do anyway :D 
  return state; 
}

export default posts;