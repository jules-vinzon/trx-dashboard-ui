import styled from 'styled-components';
import colors from 'components/utilities/colors.json';

const MainStyled = styled.div`

    margin: 0;
    padding: 0;

    .ant-layout-header {
        min-height: 80px;
        width: ${({ collapsed }) => (collapsed ? 'calc(100vw - 80px)' : 'calc(100vw - 200px)')};
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        padding: 0;
        transition: width 0.5s ease;

        @media only screen and (min-width: 320px) and (max-width: 570px) {
            width: ${({ collapsed }) => (collapsed ? '100vw' : 'calc(100vw - 100px)')};
        }
    }

    .dashboard-sider {
        background-color: ${colors.company_color};
        width: 240px;
        min-height: 100vh;
        position: sticky !important;
        left: 0;
        bottom: 0;
        top: 0;


        @media only screen and (max-width: 767px) {
            width: 200px !important;
            flex: 0 0 240px !important;
            min-height: 150vh;
        }

        &.ant-layout-sider-collapsed {
            @media only screen and (max-width: 767px) {
                width: 0;
                min-width: 0 !important;
                max-width: 0 !important;
                flex: 0 0 0 !important;
            }   
        }
    }

    .collapsed-btn {
        font-size: 16px;
        width: 64px;
        height: 64px;
        margin-right: auto;
        
    }

`;

export default MainStyled;