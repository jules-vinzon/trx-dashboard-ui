import styled from 'styled-components';
import { palette } from 'styled-theme';

const HeaderStyles = styled.div`

    .isoRight {
        display: flex;
        align-items: center;
        padding: 20px;

        .notifIcon {
            font-size: 25px;
            cursor: pointer;
        }

        li {
            margin-left: 25px;
            margin-right: 35px;
            cursor: pointer;
            line-height: normal;
            position: relative;
            display: inline-block;

            &:last-child {
                margin: 0;
            }

            &.isoUser {
                .isoImgWrapper {
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    background-color: ${palette('grayscale', 9)};
                    border: solid 2px ${palette('grayscale', 9)};
                    border-radius: 50%;

                    img {
                    height: 100%;
                    object-fit: cover;
                    }

                    .userActivity {
                    width: 15px;
                    height: 15px;
                    display: block;
                    background-color: ${palette('color', 3)};
                    position: absolute;
                    bottom: -5px;
                    right: -5px;
                    border: 2px solid #ffffff;
                    border-radius: 50%;
                    }
                }
            }
        }
    }

    .identityLi {
        margin-right: 15px !important;
        .identityHeader {
        display: flex;
        flex-direction: column;
        color: rgba(0,0,0,0.5);

        .user {
            display: flex;
            justify-content: flex-end;
            font-size: 10px;
            text-transform: uppercase;
        }

        .roles {
            display: flex;
            justify-content: flex-end;
            font-weight: 500;
        }
        
    }


`;

export default HeaderStyles;