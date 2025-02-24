import React from 'react';
import { store } from '../redux/store'
import GlobalStyles from '@iso/assets/styles/globalStyle';
import { Provider } from 'react-redux'
import '../styles/globals.css';
import { ConfigProvider } from "antd";

function App({ Component, pageProps }) {

  return <Provider store={store}>
    <GlobalStyles />
    <ConfigProvider
        theme={{
            token: {
                colorPrimary: '#6D3914'
            },
        }}
    >
      <Component {...pageProps} />
    </ConfigProvider>
    
  </Provider>
}

export default App
