import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 


import { Jumbotron} from 'react-bootstrap';
class Title extends Component {
  render() {
    let {user} = this.props; 
    let {blog} = this.props;
    console.log('blog', blog)
    return (
      <div>
        <Jumbotron className="jumbotron">
          <h1><i>Blogs by {user.name}</i></h1>
        </Jumbotron>
        {
          blog.map(b => 
          {
            return <p key={b.blogId} >{b.title}:{b.summary}</p>
          }
          )
        }
      </div>

    )
  }
}

function mapStateToProps(state){
  return {
    user: state.user,
    blog: state.blog
  }
}

export default connect(mapStateToProps, null)(Title); 