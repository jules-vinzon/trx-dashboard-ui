import React from 'react';
import Head from 'next/head'
// import styles from '../styles/globals.css'
import Icon from '@ant-design/icons';
import styled from 'styled-components';

const AlertBubble = () => (
	<svg width="109px" height="104px" viewBox="0 0 109 104" version="1.1">
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="exclamationmark.bubble.fill" transform="translate(-1692.000000, -1042.000000)" fill="#f17c15" fillRule="nonzero">
            <g id="Symbols" transform="translate(493.671500, 618.753900)">
                <g id="Medium-M" transform="translate(1198.809700, 423.457000)">
                    <path d="M29.248,103.3203 C31.2988,103.3203 32.8125,102.3438 35.2539,100.1465 L53.2715,83.8867562 L85.205,83.935584 C99.9028,83.935584 108.1538,75.43949 108.1538,60.9375 L108.1538,22.9981 C108.1538,8.4961 99.9028,0 85.205,0 L22.9492,0 C8.3008,0 0,8.4961 0,22.9981 L0,60.9375 C0,75.48832 8.5449,83.8867562 22.6074,83.8867562 L24.5605,83.8867562 L24.5605,98.0469 C24.5605,101.2696 26.2695,103.3203 29.248,103.3203 Z M54.1504,50.293 C51.2695,50.293 49.6093,48.6817 49.5117,45.752 L48.8281,21.3868 C48.7304,18.3594 50.8789,16.2598 54.1015,16.2598 C57.2265,16.2598 59.5215,18.4082 59.4238,21.4356 L58.6426,45.752 C58.5449,48.7305 56.9336,50.293 54.1504,50.293 Z M54.1504,67.1875 C50.83,67.1875 48.0957,64.795 48.0957,61.5723 C48.0957,58.3496 50.83,55.9571 54.1504,55.9571 C57.4707,55.9571 60.1562,58.3008 60.1562,61.5723 C60.1562,64.8438 57.4218,67.1875 54.1504,67.1875 Z" id="Shape"></path>
                </g>
            </g>
        </g>
    </g>
</svg>);

const AlertBubbleIco = props => <Icon component={AlertBubble} {...props} />;


const MainInvalid = styled.div`
    display: flex;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Ubuntu,sans-serif;
    flex-direction: column;
    flex: 1;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #777777;
    background-color: #f9f9f9;
    line-height: 1.5715;
    font-size: 14px;


    h2 {
      color: #777777;
    }
`;
export default function Home() {
  return (
    <MainInvalid>
      <Head>
        <title>Access Denied</title>
      </Head>
      <AlertBubbleIco /> <br />
      <h2>Access Denied</h2>
      <p>This page should originate from a valid merchant request. <br />
      Please create a valid pending transaction first. <br /> <br />
      
      <p style={{fontSize: '12px', color: '#000000'}}>Copyright {new Date().getFullYear()} Kroma <br />All Rights Reserved</p>
      </p>

    </MainInvalid>
  )
}
