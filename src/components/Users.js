import React, { Component } from 'react';
import {connect} from 'react-redux'
class Users extends Component {

renderAllUsers = () => {
  return this.props.users.map(user => <li>{user.username}</li>)
}

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.renderAllUsers()}
          {this.props.users.length}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {users: state.users}
}

export default connect(mapStateToProps)(Users)
