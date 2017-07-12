export const ADD_BLOG_POST = 'ADD_BLOG_POST';
export const CHANGE_USER = 'CHANGE_USER';  

export function addBlogPost(posts){
  return {
    type: ADD_BLOG_POST, 
    posts
  }
}

export function changeUser(user){
  return {
    type: CHANGE_USER, 
    user
  }
}

