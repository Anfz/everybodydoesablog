import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import { Row } from 'react-bootstrap';


import Blog from './Blog'; 

  function chunkBlogRow(blogs){
    let chunkSize = 4; 
    let blogRows = []; 
    for (let i =0; i<blogs.length; i+= chunkSize){
      let row = blogs.slice(i, i+chunkSize);
      blogRows.push(row);
    }
    return blogRows;
  }


class Blogs extends Component {

  render() { 
    let {user,blogs} = this.props; 
    return (
      <div>
        {
          chunkBlogRow(blogs).map((blogRow, index) => 
          {
            let cols = blogRow.map( blog => 
            {
              
              return <Blog key={blog.blogId} blog={blog} />
            })
            return <Row key={index}>{cols}</Row>;
          })
        }
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    blogs: state.blogs, 
    user: state.user
  }
}

export default connect(mapStateToProps, null)(Blogs);
