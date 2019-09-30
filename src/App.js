import React, { Component } from 'react';

import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import { Menu, Icon, Layout } from 'antd';
const { Footer, Content } = Layout;
import { connect } from 'react-redux'
import Home from '~/Home'
import Login from '~/Login'

class App extends Component {
  state = {

  }
  componentDidMount() {
    // let token = localStorage.getItem('Authorization')
    // this.setState({
    //     token
    // })
  }

  render() {
    let { isLogin } = this.props;
    console.log(isLogin);
    return (
      <div>
        <Layout style={{ width: '100%' }}>
          <Content>
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/notfound" render={() => <div>404</div>} />
              <Redirect from="/" to="/login" exact />
              {/* 404 一定要写在最后面*/}
              <Redirect from="*" to="/notfound" />
            </Switch>
          </Content>

        </Layout>
      </div >
    )
  }
}
App = withRouter(App);//返回一个新的组件 

let mapStateToProps = (state) => {
  return {
    isLogin: state.user.isLogin
  }
}
App = connect(mapStateToProps)(App);
export default withRouter(App)
