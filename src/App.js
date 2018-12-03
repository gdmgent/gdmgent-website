import React, { Component } from 'react'

/*
Libraries
*/
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

/*
Page components
*/
import { HomePage, PostsPage, ProfilePage, StoriesPage, UsersPage, WorksPage, NotFoundPage } from './front/pages'
/*
Admin Routes
*/
import Admin from './back/Admin'

/*
State management via Redux
*/
import store from './shared/store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Redirect from="/home" to="/"/>
            <Route exact path='/blog' component={PostsPage}/>
            <Route exact path='/stories' component={StoriesPage}/>
            <Route exact path='/work' component={WorksPage}/>
            <Route exact path="/profile" component={ProfilePage} />
            <Route exact path="/users" component={UsersPage} />
            <Route path="/admin" component={Admin} />
            <Route path="*" component={NotFoundPage}/>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
