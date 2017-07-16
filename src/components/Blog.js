import React, { Component } from 'react'; 
import { Col } from 'react-bootstrap';

class Blog extends Component {
  render(){
    let {blog} = this.props; 
    console.log('blogss', blog);
    return (
      <Col className="blog" md={3}>
        <h3>{blog.title}</h3>
        <h4>{blog.summary}</h4>
      </Col>
    )
  }
}

export default Blog; 