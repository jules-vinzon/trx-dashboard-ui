import Main from "./index.styles"
import React, { useState, useEffect } from 'react'
import { Layout, Button } from "antd"
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import Sidebar from "./containers/sidebar/sidebar"
import CustomHeader from './containers/header/header'
import DashboardContainer from './containers/dashboard/dashboard'
import useAuth from 'helpers/hookAuth.js';
import { useSelector, useDispatch } from 'react-redux';
import dashboardAction from '@iso/redux/dashboard/actions.js';
import appAction from '@iso/redux/app/actions';
import useWindowSize from 'helpers/useWindowSize';

const { Sider, Header, Content } = Layout
const { toggleAll } = appAction;

const { fetchTrx } = dashboardAction;

export default function Dashboard() {
  const { width, height } = useWindowSize();
  const dispatch = useDispatch();

  useAuth();

  useEffect(() => {
    dispatch(toggleAll(width, height));
  }, [
    width,
    height,
    dispatch
  ]);

  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState('dashboard');

  const screenWidth = useSelector(state => state.App.view);
  const { loginData } = useSelector((state) => state.Auth);


  useEffect(() => {


    if (loginData && selectedKey === 'dashboard') {
      dispatch(fetchTrx(loginData?.username));
    }

    if (screenWidth !== 'DesktopView') {
      setCollapsed(true);
    } else {
      setCollapsed(false);
    }
  }, [selectedKey, 
    dispatch, 
    loginData,
    screenWidth]);

  const handleMenuSelect = (key) => {
    setSelectedKey(key);
  };

  const renderContent = () => {
  
    switch (selectedKey) {
      case 'dashboard':
        return <DashboardContainer collapsed={collapsed}/>;
        default:
        return null;
    }
  };
  
  return (
    <>
      <Main collapsed={collapsed ? collapsed : undefined}>
        <Layout>
          <Sider 
            className="dashboard-sider"
            trigger={null} 
            collapsible 
            collapsed={collapsed}
          >
            <Sidebar onSelect={handleMenuSelect} selectedKey={selectedKey}/>  
          </Sider>
          <Layout>
            <Header>
              <Button 
                type="text" 
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                className="collapsed-btn"
              />
              <CustomHeader />
            </Header>
            <Content>
              {renderContent()}
            </Content>
          </Layout>
        </Layout>          
      </Main>
    </>
  );
}
