import React from 'react';
import { Component } from 'react';

import Header from './header';
import Container from './container';

export default class App extends Component {
  render() {
    return (
      <div>

              <div className="inner-bg">
                <div className="inner-bg-overlay">
        <Header />
        {this.props.children}


                      </div>
                    </div>
      </div>
    );
  }
}
