import React, { Component } from 'react';

/*
Libraries
*/

class PublicLayout extends Component {
  render() {
    const { children } = this.props
    return (
      <div>
        {children}
      </div>
    )
  }
}

export default (PublicLayout);