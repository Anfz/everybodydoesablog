import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 

import BlogItem from './BlogItem'; 

class BlogItemList extends Component {
  render() { 

    return (
      <div>
        {
          this.props.posts.map(post => 
          {
            return <BlogItem key={post.postId} post={post} />;
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

export default connect(mapStateToProps, null)(BlogItemList);
