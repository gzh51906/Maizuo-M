import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Home from '~/Home'
import Login from '~/Login'
import Admin from '~/admin'
class App extends React.Component {
  state = {
    current: '/home',
  }
  render() {
    return <div>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/admin" component={Admin} />
        <Route path="/notfound" render={() => <div>404</div>} />
        <Redirect from="/" to="/login" exact />
        <Redirect from="*" to="/notfound" />
      </Switch>
    </div>
  }
}

export default App