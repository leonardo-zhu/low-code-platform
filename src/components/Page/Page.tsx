import React, { useState } from 'react';
import { Layout } from "antd";
import { PageProps } from '.';
import BaseElement from "../BaseElement";
import Navigation from "../Navigation";
import ElementFactory from "../../core/ElementFactory";

const { Header, Content, Footer, Sider } = Layout;

class Page extends BaseElement<PageProps, any> {

  renderContent() {
    const { contents } = this.props.data;
    debugger
    return contents.map(content => ElementFactory.createElement(content))
  }

  render() {
    const { navigation } = this.props.data
    return (
      <Layout>
        <SiderComp>
          <Navigation data={navigation}/>
        </SiderComp>
        <Layout className="site-layout"
                style={{ minHeight: "100vh", marginLeft: 200, transition: "all 0.2s" }}>
          <Header className="site-layout-background" style={{ height: 48, padding: 0 }}/>
          <Content style={{ margin: '12px 16px 0', overflow: 'initial' }}>
            <div className="site-layout-background" style={{ height: "100%" }}>
              {this.renderContent()}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Low Code Platform ©2021 Created by XiaoLong.ZXL</Footer>
        </Layout>

      </Layout>
    );
  }
}


const SiderComp: React.FC = ({ children }) => {
  const [collapsed, setCollapse] = useState(false);

  return (
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
      collapsible
      collapsed={collapsed}
      onCollapse={() => setCollapse(!collapsed)}
    >
      {children}
    </Sider>)
}

export default Page;
