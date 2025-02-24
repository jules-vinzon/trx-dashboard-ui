import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import HeaderStyles from './header.styles';
import { Popover, Typography } from "antd";
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { AvatarPlaceholder } from "components/utilities/customIcons.js";
import TopbarDropdownWrapper from './headerDropdown.styles';
import MenuList from 'components/customComponents/globalMenuList/menuList.js';
import texts from 'components/utilities/texts';
import authAction from '@iso/redux/auth/actions.js';
import { useRouter } from 'next/router';


const { Text } = Typography;
const { logout } = authAction;

export default function CustomHeader() {
    const { idToken, loginData, loginSuccess, kickedOut } = useSelector((state) => state.Auth);
    const screenWidth = useSelector(state => state.App.view);
    
    const router = useRouter(); 

    const [visible, setVisibility] = useState(false);

    const dispatch = useDispatch();


    useEffect(() => {
        if (!loginSuccess && kickedOut) {
            router.push('/signin');
        }
    }, [loginSuccess, kickedOut, router]);

    const clearTime = () => {
        dispatch(logout({token: idToken}));
    }

    function handleVisibleChange() {
        setVisibility(visible => !visible);
    }

    const content = (
        <TopbarDropdownWrapper className="isoUserDropdown" onClick={() => setVisibility(false)} >
          <div className="userBanner">
            <Text strong>{loginData ? `${loginData?.first_name} ${loginData?.last_name} ` : 'Unknown User'}</Text>
            <Text type="secondary" style={{ fontSize: '12px' }}>{ loginData?.role  }</Text>
          </div>
          <MenuList
            title={texts.topbar_menu_list_edit_profile}
            leftIcon={<UserOutlined />}
            size='large'
          />
          <MenuList
            title={texts.topbar_menu_list_logout}
            leftIcon={<LogoutOutlined />}
            size='large'
            onClick={() => clearTime()}
          />
        </TopbarDropdownWrapper>
    );
  
    return (
    
        <HeaderStyles>
            <ul className="isoRight">
                { screenWidth === 'DesktopView' ? 
                
                    <li className='identityLi'>
                        <div className="identityHeader">
                            <div className="user">{loginData ? loginData.first_name : 'Unknown User'}</div>
                            <div className="roles"> { loginData ? loginData.role : '' } </div> 
                        </div>
                    </li> : ''}
                <li className="isoUser" style={ screenWidth === 'MobileView' ? {marginLeft: '20px'} : {}}>
                    <div className="isoImgWrapper">
                        <Popover
                            content={content}
                            trigger="click"
                            visible={visible}
                            onVisibleChange={handleVisibleChange}
                            arrowPointAtCenter={true}
                            placement="bottomLeft"
                        >
                            <div className="isoImgWrapper">
                                <AvatarPlaceholder />
                            </div>
                        </Popover>
                    </div>
                </li>
            </ul>
        </HeaderStyles>
        );
      
  }