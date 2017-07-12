import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 

import Post from './Post'; 

class Posts extends Component {
  render() { 
    let {user,posts} = this.props; 
    return (
      <div>
        {
          posts.filter( post => post.userId == user.id).map(post => 
          {
            return <Post key={post.postId} post={post} />;
          })
        }
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    posts: state.posts, 
    user: state.user
  }
}

export default connect(mapStateToProps, null)(Posts);
