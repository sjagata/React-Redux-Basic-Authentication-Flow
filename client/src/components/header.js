import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import ImageLoader from 'react-imageloader';

class Header extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      // show a link to sign out
      return <li className="nav-item">
        <Link style={{color:'#fff'}} className="nav-link" to="/signout">Sign Out</Link>
      </li>
    } else {
      // show a link to sign in or sign up
      return [
        // <li className="nav-item" key={1}>
        //   <Link className="nav-link" to="/signin">Sign In</Link>
        // </li>,
        // <li className="nav-item" key={2}>
        //   <Link className="nav-link" to="/signup">Sign Up</Link>
        // </li>
      ];
    }
  }

  render() {
    return (


      <nav className="nav navbar navbar-default" role="navigation">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <i className="icon-menu"></i> Menu
              </button>
              <Link to="/" className="navbar-brand">
                {/*  <ImageLoader src="../../assets/img/h2ologo.png"> </ImageLoader> */}
                <h1>Website Title</h1>
              </Link>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
                  {this.renderLinks()}
              </ul>
            </div>
          </div>
        </nav>


    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(Header);
