import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Feature extends Component {
  componentWillMount() {
    this.props.fetchMessage();
  }

  render() {
    console.log(this.props);
    return (
          <div className="container-fluid" style={{height: '1000px'}}>
          <br />
            <div style={{color:'#fff'}}> {this.props.message}</div>
            <p style={{color:'#fff'}}>Hey there, under construction</p>

          </div>
    );
  }
}

function mapStateToProps(state) {
  return { message: state.auth.message };
}

export default connect(mapStateToProps, actions)(Feature);
