export const ADD_BLOG_POST = 'ADD_BLOG_POST';
export const CHANGE_USER = 'CHANGE_USER';  

export const GET_USER = 'GET_USER';


function receiveUser(json){
  console.log('receiveUserIsCalled');
  return {
    type:GET_USER, 
    user:json
  }
}

function getUserJson(){
  console.log('getUserJson is called');
  return fetch('http://localhost:51272/api/Users/053a1d27-6480-4c8f-6ca6-08d4cb6d50fc')
  .then(response => response.json())
}

export function getUser() {
  console.log('getUserIsCalled');
  return function(dispatch){
    return getUserJson()
    .then(json => dispatch(receiveUser(json)));
  }
}