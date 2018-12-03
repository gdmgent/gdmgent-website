import React, { Component } from 'react';

/*
Libraries
*/
import { Redirect, Route, Switch } from 'react-router-dom';

/*
Page components
*/
import { DashboardPage } from './pages';

class Admin extends Component {
  render() {
    const { match } = this.props
    return (
      <Switch>
        <Route exact path={`${match.path}/`} component={DashboardPage}/>
        <Redirect from={`${match.path}/dashboard`} to={`${match.path}/`} />
        <Route exact path={`${match.path}/posts`} component={DashboardPage} />
      </Switch>
    )
  }
}

export default (Admin);