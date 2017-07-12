import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 


import { Jumbotron} from 'react-bootstrap';
class Title extends Component {
  render() {
    let {user} = this.props; 
    console.log(user);
    return (
      <Jumbotron className="jumbotron">
        <h1>{user.blogTitle}</h1>
        <p>{user.blogSubTitle}</p>
        <p><i>by {user.name}</i></p>
      </Jumbotron>
    )
  }
}

function mapStateToProps(state){
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, null)(Title); 