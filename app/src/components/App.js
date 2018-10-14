import React, { Component } from 'react';
import axios from 'axios';
import Notepad from './notepad.js';
import Directory from "./directory.js";
import Sidebar from "./Sidebar.js";
import Logo from "./logo.js";
import {Layout, Menu, Breadcrumb, Icon } from 'antd';
import '../style/App.css';
import '../style/panel.css';
import '../style/logo.css';
import 'antd/dist/antd.css';

const { SubMenu } = Menu;
const {Header, Content, Sider} = Layout;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      references: []
    }

    this.updateRef = this.updateRef.bind(this);
  }

  updateRef(data) {
    this.setState(prevState => ({
      references: [...prevState.references, data]
    }))
    this.forceUpdate();
  }


  render() {
    return (
      <Layout className='App'>
        <Header>
          <div >
            <Logo className='image'/>
          </div>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu key="sub1" title={<span><Icon type="team" />Sociology</span>}>
                <Menu.Item key="1">Chapter 1</Menu.Item>
                <Menu.Item key="2">Chapter 2</Menu.Item>
                <Menu.Item key="3">Chapter 3</Menu.Item>
                <Menu.Item key="4">Chapter 4</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="smile" />Psychology</span>}>
                <Menu.Item key="5">Abnormal</Menu.Item>
                <Menu.Item key="6">Cognitive</Menu.Item>
                <Menu.Item key="7">Social</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" title={<span><Icon type="stock" />Economics</span>}>
                <Menu.Item key="9">Supply/Demand</Menu.Item>
                <Menu.Item key="10">Opportunity Cost</Menu.Item>
                <Menu.Item key="11">Money Markets</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Notepad onOutputChange={this.updateRef}/>
          <Sidebar data={this.state.references}/>
        </Layout>
      </Layout>

      // <div className="App">
      //   <div className = "logo">
      //     <Logo />
      //   </div>
      //   <div className = "panel1">
      //     <Directory />
      //   </div>
      //   <div className = "panel2">
      //     <Notepad onOutputChange={this.updateRef}/>
      //   </div>
      //   <div className = "panel1">
      //     <Sidebar data={this.state.references}/>
      //   </div>
      // </div>
    );
  }
}

export default App;
