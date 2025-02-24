import React, { useEffect } from 'react'
import SampleContentContainer from "./signinForm.styles"
import { Layout, Form, Button } from 'antd';
import texts from "../../../components/utilities/texts.json"
import { useSelector, useDispatch } from 'react-redux'
import { generateRandomString } from '../../../components/utilities/stringUtils.js';
import authAction from '../../../redux/auth/actions.js';
import moment from 'moment-timezone';
import FormItemInput from '../../../components/customComponents/globalFormItem/formItemInput.js'
import { useRouter } from 'next/router';

const { Content } = Layout;
const { login } = authAction;


export default function SignInForm() {
  const router = useRouter(); 
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { loginSuccess, isLoggingIn, loginErrorMessage } = useSelector((state) => state.Auth);

  useEffect(() => {
    if (loginSuccess) {
      router.push('/dashboard');
    }

    if (localStorage.getItem('idToken')) {
      router.push('/dashboard');
    }

  }, [loginSuccess, router]);

  const handleSubmit = (values) => {

    const data = {
      request_id: `TRXDASHBOARD${moment().tz('Asia/Manila').format('YYYYMMDD')}${generateRandomString(7)}`,
      username: values.username,
      password: values.password
    };
    dispatch(login(data));
  }


  return (
    <SampleContentContainer>
      <div className="content-page">
        <Layout>
          <Content className='signin-content'
            style={{
              padding: 24,
              margin: 0,
              backgroundColor: '#FFFFFF',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: 'auto', 
              maxWidth: '425px',
              maxHeight: '480px'
            }}
          >

          <div>
            <div className = 'signin-header'>{texts.signin_header}</div>
            <div className = {loginErrorMessage ? 'signin-failed-header-content' : 'signin-header-content'}>{loginErrorMessage ? loginErrorMessage : texts.signin_header_content1}</div>

            <Form
              form={form}
              name="signin"
              onFinish={handleSubmit}
              scrollToFirstError
            >
              <div className = 'signin-label-username'>{texts.signin_label_username}</div>
              <FormItemInput
                required={true}
                name="username"
                reqMessage={texts.signin_label_username_required_message}
                validation= "username"
                messageValidation={texts.signin_label_username_invalid_message}
                placeholder="Username"
              />      

              <div className = 'signin-label-password'>{texts.signin_label_password}</div>         
              <FormItemInput
                inputType='password'
                required={true}
                name="password"
                reqMessage={texts.signin_label_password_required_message}
                placeholder="Password"
              />  

              <Button 
                className='signin-btn'
                type="primary" 
                size="large" 
                htmlType="submit"
                loading={isLoggingIn}
              >
                <div>{texts.signin_header}</div>
              </Button>
            
            </Form>
          </div>

          </Content>
        </Layout>
      </div>
    </SampleContentContainer>
  );
    
}
