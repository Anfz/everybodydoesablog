import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 

import Post from './Post'; 

class Posts extends Component {
  render() { 

    return (
      <div>
        {
          this.props.posts.map(post => 
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
    posts: state.posts
  }
}

export default connect(mapStateToProps, null)(Posts);
