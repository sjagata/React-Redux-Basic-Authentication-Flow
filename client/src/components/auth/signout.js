import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Link } from 'react-router'

class Signout extends Component {
  componentWillMount() {
    this.props.signoutUser();
  }

  render() {
    return (
      <div className="container-fluid" style={{height: '1000px'}}>
          <br />
            <div style={{color:'#fff'}}> Sorry to see you go... <Link className="nav-link" to="/signin">click here to Sign In</Link></div>;
          </div>
    );
  }
}

export default connect(null, actions)(Signout);
