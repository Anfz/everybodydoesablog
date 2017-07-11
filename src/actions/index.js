export const ADD_BLOG_POST = 'ADD_BLOG_POST'; 

export function addBlogPost(posts){
  return {
    type: ADD_BLOG_POST, 
    posts
  }
}

