import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import './Home.css';
import { Route, Switch, withRouter } from 'react-router-dom'
import UrseList from '../UrseList';
import AddUrse from '../AddUres';
import MoveList from '../MoveList';
import Cinema from '../Cinema';
import Editcinema from '../Editcinema'
import AddMove from '../AddMove';
import Hotfilm from '../Hotfilm';
import Addfilm from '../Addfilm'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class Home extends React.Component {

  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  goto = ({ key }) => {
    this.props.history.push(key);
    console.log(this);

  }

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" >
            <SubMenu
              key="sub1"
              title={<span>
                <Icon type="user" />
                <span>用户管理</span>
              </span>
              }>
              <Menu.Item key="/home/urselist" onClick={this.goto}>用户列表</Menu.Item>
              <Menu.Item key="/home/addurse" onClick={this.goto}>添加用户</Menu.Item>
              <Menu.Item key="/home/cinema" onClick={this.goto}>影院列表</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span>
                <Icon type="menu" />
                <span>影片管理</span>
              </span>
              }>
              <Menu.Item key="/home/movelist" onClick={this.goto}>上映列表</Menu.Item>
              <Menu.Item key="/home/hotfilm" onClick={this.goto}>影厅热映</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={<span>
                <Icon type="file" />
                <span>订单管理</span>
              </span>
              }>
              <Menu.Item key="6">订单列表</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#001529', padding: 0 }}>
            <h1 style={{ textAlign: "center" }}>用户后台管理系统</h1>
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <Switch>
              <Route path="/home/urselist" component={UrseList} />
              <Route path="/home/addurse" component={AddUrse} />
              <Route path="/home/movelist" component={MoveList} />
              <Route path="/home/cinema" component={Cinema} />
              <Route path="/home/addmove" component={AddMove} />
              <Route path="/home/editcinema/:id" component={Editcinema} />
              <Route path="/home/hotfilm" component={Hotfilm} />
              <Route path="/home/addfilm" component={Addfilm} />
            </Switch>

          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(Home)