import styled from 'styled-components';

const MainStyled = styled.div`

display: flex;
font-family: "Montserrat",-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Ubuntu,sans-serif;
flex-direction: column;
flex: 1;
width: 100vw;
min-height: 100vh;
justify-content: flex-start;
align-items: center;
color: #444444;
font-size: 13px;
overflow: auto;
position: absolute;
background-color: #FFFFFF;
overflow-x: hidden;

.ant-spin-nested-loading {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: flex-end;

    .ant-spin-container {
        display: flex;
        flex-direction: column;
        min-height: 100vh;

        .content-panel-home {
            max-width: 800px;
            min-width: 200px;
            margin: 0 auto;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 100%;
            padding: 10px;
            box-sizing: border-box;
        }
    }
}

.content-panel {
    max-width: 800px;
    min-width: 200px;
    margin: 0 auto;
    flex: 1;
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;

    @media only screen and (max-width: 425px) {
        flex-direction: column;
        flex-flow: column-reverse;
        padding: 0 10px;
    }

    @media only screen and (min-width: 426px)  and (max-width: 850px) {
        flex-direction: column;
        flex-flow: column-reverse;
        max-width: 700px;
        padding: 0 20px;
    }
    @media only screen and (min-width: 1021px) {
        align-items: flex-start;
    }
}


.header {
    display: flex;
    flex-direction: column;

    .detailsHeader {
        display: flex;
        flex-direction: row;
        padding: 20px 0;
        box-sizing: border-box;
        margin: 0 auto;
        height: 100%;

        width: 100%;
        max-width: 100%;
    
        .leftContent {
            display: flex;
            flex-direction: column;
            flex: 1 !important;
            width: 50%;
            height: 100%;

            div {
                flex: 0;
            }
    
            .primary {
                font-size: 16px;
                font-weight: bold;
                height: 25px;
                width: 100%;
                display: flex;
                flex-direction: row;
                margin: 0;
                text-transform: uppercase;
    
                .loader-ref {
                    width: 200px !important;
                    height: 20px !important;
                    margin: 0 !important;
                    line-height: 12px !important;
                    display: block !important;
                    flex: 1;
                    
                }
            }
    
            .secondary {
                text-transform: uppercase;
                font-size: 12px;
                line-height: 16px;
                height: 16px;
                width: 100%;
            }
        }

    
        @media only screen and (max-width: 375px) {
            width: 100%;
            max-width: 100%;
            flex-direction: column;
            .leftContent {
                width: 100%;
                flex:1;
            }
        }
    
      }
  }

.ant-spin {
    .ant-spin-dot {
        top: 100% !important;
    }
    .ant-spin-text {
        top: 100% !important;
    }
}
.page-footer {
    width: 100%;
    max-width: 100% !important;
    padding: 10px 0 30px 0;
    box-sizing: border-box;
}
.page-header {
    width: 100%;
    // max-width: 800px !important;
   
}
`;

export default MainStyled;