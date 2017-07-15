export const ADD_BLOG_POST = 'ADD_BLOG_POST';
export const CHANGE_USER = 'CHANGE_USER';  

export const GET_USER = 'GET_USER';
export const GET_BLOG = 'GET_BLOG';


function receiveUser(json){
  return {
    type: GET_USER, 
    user: json
  }
}

function getUserJson(user){
  return fetch('http://localhost:51272/api/Users/' + user)
  .then(response => response.json())
}

export function getUser(user) {
  return function(dispatch){
    return getUserJson(user)
    .then(json => dispatch(receiveUser(json)));
  }
}


function receiveBlogs(json){
  return {
    type: GET_BLOG, 
    blog: json
  }
}

function getBlogsJson(user){
    return fetch('http://localhost:51272/api/Users/'+user+'/Blogs')
  .then(response => response.json())
}

export function getBlogs(user) {
  return function(dispatch){
    return getBlogsJson(user)
    .then(json => dispatch(receiveBlogs(json)));
  }
}
