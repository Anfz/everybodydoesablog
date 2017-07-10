import React, { Component } from 'react'; 

class BlogItem extends Component {
  render(){
    return (
      <div className="blog-item">
        <h3>A Cool Post</h3>
        <p className="blog-meta">10/07/2017</p>
        <p className="blog-text">Blog Text</p>
      </div>
    )
  }
}

export default BlogItem; 