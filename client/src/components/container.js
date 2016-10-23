import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../actions';

import ImageLoader from 'react-imageloader';
import {React_Boostrap_Carousel} from 'react-boostrap-carousel';
import FlipCard from 'react-flipcard';

import Signin from './auth/signin';
import Signup from './auth/signup';

class Container extends Component {

  componentWillMount() {
    this.props.checkSigninUser();
  }

  render() {



    const FilpCardSignIn = React.createClass({
      getInitialState() {
        return {
          isFlipped: false
        };
      },

      handleOnFlip(flipped) {
        if (flipped) {
          this.refs.backButton.getDOMNode().focus();
        }
      },

      handleKeyDown(e) {
        if (this.state.isFlipped && e.keyCode === 27) {
          this.showFront();
        }
      },

      render() {
        return (
          <div>

            <FlipCard className="col-md-6">
              <div className="line">
                  <header className="v-align"><h3>Have an Account?</h3><h2>Sign In</h2></header>
              </div>
              <div>
                <div className="line">
                    <h3 className="text-center"> Sign In</h3>
                  </div>
                <Signin />
              </div>
            </FlipCard>
          </div>
        );
      }
    });



    const FilpCardSignUp = React.createClass({
      getInitialState() {
        return {
          isFlipped: false
        };
      },

      handleOnFlip(flipped) {
        if (flipped) {
          this.refs.backButton.getDOMNode().focus();
        }
      },

      handleKeyDown(e) {
        if (this.state.isFlipped && e.keyCode === 27) {
          this.showFront();
        }
      },

      render() {
        return (
          <div>

            <FlipCard className="col-md-6">
              <div className="line">
                  <header className="v-align"><h3>Need an Account?</h3><h2>Register</h2></header>
              </div>
              <div>
                <div className="line">
                    <h3 className="text-center"> Register</h3>
                  </div>
                <Signup />
              </div>
            </FlipCard>
          </div>
        );
      }
    });







    return (
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-sm-12 text">
                      <h1>Sub Title</h1>
                      <div className="description">
                        <p>
                          Caption
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="row paddd">
                        <div className="col-md-7 col-xs-12 col-sm-12" >

                              <div className="row">

<div className="col-ms-12">
<br />
<br />
<h1>React + Redux basic authentication flow</h1>
<br />
</div>





                                <div className="col-md-2"></div>
                                  <div className="col-md-8" style={{ padding: '100px 0px' }}>
                                    <div className="well" style={{ background:'transparent' }}>
                                      <h3 className="text-left" style={{color:'#fff'}}> INTRO : </h3>
                                      <div className="embed-responsive embed-responsive-16by9">
                                      <iframe className="embed-responsive-item"  src="http://youtu.be/39hso3B6MaE" frameborder="0" allowfullscreen></iframe>
                                      </div>
                                    </div>
                                  </div>
                                <div className="col-md-2"></div>
                              </div>
                      {/*}  <Video controls autoPlay>
  			<source src="http://media.w3.org/2010/05/sintel/trailer.mp4" />
			</Video>  */}

            {/*                                         <React_Boostrap_Carousel animation={false} className="carousel-fade" style={{display: 'none !important'}}>
                                                    <div style={{height:670,width:"100%",backgroundColor:"aqua"}}>


                                                        <ImageLoader src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="> </ImageLoader>
                                                        <div className="container">
                                                          <div className="carousel-caption">
                                                            <h1>User Form sub titles... </h1>
                                                            <p>Say some thing of it </p>
                                                            <p><a className="btn btn-lg btn-primary" href="#" role="button">Sign up today</a></p>
                                                          </div>
                                                        </div>




                                                  </div>
                                                    <div style={{height:670,width:"100%",backgroundColor:"aqua"}}>
                                                      <ImageLoader src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="> </ImageLoader>
                                                      <div className="container">
                                                        <div className="carousel-caption">
                                                          <h1>User Form sub titles... </h1>
                                                          <p>Say some thing of it  </p>
                                                          <p><a className="btn btn-lg btn-primary" href="#" role="button">Sign up today</a></p>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div style={{height:670,width:"100%",backgroundColor:"lightpink"}}>
                                                      <ImageLoader src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="> </ImageLoader>
                                                      <div className="container">
                                                        <div className="carousel-caption">
                                                          <h1>User Form sub titles... </h1>
                                                          <p>Say some thing of it  </p>
                                                          <p><a className="btn btn-lg btn-primary" href="#" role="button">Sign up today</a></p>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </React_Boostrap_Carousel>
*/}





                        </div>

                        <div className="col-md-5 col-xs-12 col-sm-12 form-box">
                          <div className="form-top">
                            <div className="form-top-left">
                              <h3>Welcome to <strong></strong> User Form</h3>
                            </div>
                            <div className="form-top-right">
                              <i className="fa fa-lock" />
                            </div>
                          </div>
                          <div className="form-bottom">

                            <div className="row">
                              <div className="col-md-6 col-xs-12 col-sm-12">

                                <FilpCardSignIn/>

                              </div>
                              <div className="col-md-6 col-xs-12 col-sm-12">

                                  <FilpCardSignUp />

                              </div>
                           </div>

                          </div>
                        </div>

                  </div>

                 </div>


    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}


export default connect(mapStateToProps, actions)(Container);
