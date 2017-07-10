import React, { Component } from 'react'; 

import BlogItem from './BlogItem'; 

class BlogItemList extends Component {
  render() { 
    return (
      <div>
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>
    )
  }
}

export default BlogItemList; 