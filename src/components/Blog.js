import React, { Component } from 'react'; 
import { Col } from 'react-bootstrap';

class Blog extends Component {
  render(){
    let {blog} = this.props; 
    return (
      <Col className="blog-col" md={3}>
        <div className="blog-item">
        <h3>{blog.title}</h3>
        <h4>{blog.summary}</h4>
        </div>
      </Col>
    )
  }
}

export default Blog; 