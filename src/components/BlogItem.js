import React, { Component } from 'react'; 


class BlogItem extends Component {
  render(){
    let {post} = this.props; 

    return (
      
      <div className="blog-item">
        <h3>{post.title}</h3>
        <p className="blog-meta">10/07/2017</p>
        <p className="blog-text">{post.text}</p>
      </div>
    )
  }
}

export default BlogItem; 