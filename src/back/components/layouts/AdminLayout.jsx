import React, { Component } from 'react';

/*
Libraries
*/

class AdminLayout extends Component {
  render() {
    const { children } = this.props
    return (
      <div>
        {children}
      </div>
    )
  }
}

export default (AdminLayout);