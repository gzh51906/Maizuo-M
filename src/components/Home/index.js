import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import './Home.css';
import { Route,Switch,withRouter,Redirect } from 'react-router-dom'
import UrseList from '../UrseList';
import AddUrse from '../AddUres';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class Home extends React.Component{

  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  goto = ({key}) => {
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
                    <Menu.Item key="/urselist" onClick={this.goto}>用户列表</Menu.Item>
                    <Menu.Item key="/addurse" onClick={this.goto}>添加用户</Menu.Item>
               </SubMenu>
               <SubMenu
                  key="sub2"
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
                 <Route path="/urselist" component={UrseList}/>
                 <Route path="/addurse" component={AddUrse}/>
                 <Redirect from="/" to="urselist"/>
              </Switch>

            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
         </Layout>
      </Layout>
    );
  }
}

export default withRouter(Home)