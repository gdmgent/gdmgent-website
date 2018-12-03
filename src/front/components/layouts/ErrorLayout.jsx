import React, { Component } from 'react';

/*
Libraries
*/

class ErrorLayout extends Component {
  render() {
    const { children } = this.props
    return (
      <div>
        {children}
      </div>
    )
  }
}

export default (ErrorLayout);