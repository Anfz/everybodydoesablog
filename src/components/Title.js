import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 


import { Jumbotron} from 'react-bootstrap';
class Title extends Component {
  render() {
    let {user} = this.props; 
    return (
      <div>
        <Jumbotron className="jumbotron">
          <h1><i>Blogs by {user.name}</i></h1>
        </Jumbotron>
      </div>

    )
  }
}

function mapStateToProps(state){
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, null)(Title); 