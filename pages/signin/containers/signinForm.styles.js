import styled from 'styled-components';
import colors from '../../../components/utilities/colors.json';

const SigninStyles = styled.div`


    .content-page {
        min-width: 100vw;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${colors.background_color};
    }

    .ant-layout {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${colors.background_color};
        width: 100%;
        height: 100%; 
        flex-grow: 1; 
    }

    .ant-form {
        min-width: 322px;
    }

    .signin-header {
        font-weight: bold;
        font-size: 36px;
        text-align: center;
        margin-bottom: 10px;
    }

    .signin-header-content, .signin-failed-header-content {
        font-size: 16px;
        margin-top: 15px;
        text-align: center;
    }

    .signin-failed-header-content {
        color: #f44336;
        font-size: 18px;
    }

    .signin-header-content {
        color: #A3AED0;
    }

    .signin-form {
        border-radius: 35px;
    }

    .signin-input {
        min-width: 300px;
        height: 50px;
        border-radius: 8px;
        border: 1px solid ${colors.company_color};
        margin-bottom: 15px;
        padding: 12px 15px;
    }

    .signin-input:focus {
        border-color: ${colors.active_menu_color};
        outline: none;
        box-shadow: 0 0 3px ${colors.active_menu_color};
    }
        
    .signin-label-username {
        margin: 50px 0 5px 0;
    }

    .signin-label-password {
        margin: 15px 0 5px 0;
    }
    
    .signin-label-forgot {
       display: flex;
       justify-content: flex-end;
       color: #4318FF;
    }

    .signin-btn {
        width: 100%;
        height: 50px;
        margin-top: 23px;
        background-color: ${colors.company_color};
        border-color: ${colors.company_color} !important;
        border-radius: 25px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
    }

    .signin-btn:hover {
        background-color: ${colors.active_menu_color};
        color: ${colors.company_color} !important;
        border-color: ${colors.company_color} !important;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    }

    .signin-label-username, .signin-label-password {
        font-size: 16px;
        font-weight: bold;
    }

    
`;

export default SigninStyles;