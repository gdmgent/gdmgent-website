import React, { Component } from 'react'

/*
Layouts
*/
import { ErrorLayout } from '../../components/layouts'

class NotFoundPage extends Component {
  render() {
    return (
      <ErrorLayout>
        <p>Error Page</p>
      </ErrorLayout>
    )
  }
}

export default (NotFoundPage)