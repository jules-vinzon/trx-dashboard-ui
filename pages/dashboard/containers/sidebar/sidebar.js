import React, {useEffect} from "react";
import { Flex, Menu } from "antd";
import SidebaStyles from './sidebar.styles'
import { DashboardOutlined } from '@ant-design/icons' 
import authAction from '@iso/redux/auth/actions.js';
import { useSelector, useDispatch } from 'react-redux'
import Image from "next/image";

const { refetchAuth } = authAction;


export default function Sidebar(props) {
  const dispatch = useDispatch();
  const { loginData } = useSelector((state) => state.Auth);

    useEffect(() => {
      if (!loginData) {
          dispatch(refetchAuth());
      }
    }, [loginData, dispatch]);

    return (
      <SidebaStyles collapsed={props.collapsed}> 
        <Flex align="center" justify="center">
            <div className="sidebar-logo"> 
            <Image 
              className="trx-logo" 
              src="/trx-logo.png" 
              alt="Trx Logo" 
              width={100}
              height={100}
              layout="intrinsic"
            />   
            </div>
        </Flex>
        <Menu 
          className="menu-bar" 
          mode="inline" 
          defaultSelectedKeys={['dashboard']} 
          items={[
            {
              key: 'dashboard',
              icon: <DashboardOutlined />,
              label: 'Dashboard',
            }
          ]}
          onClick={(e) => props.onSelect(e.key)}
          selectedKeys={[props.selectedKey]}
        />
      </SidebaStyles>
    );
      
  }