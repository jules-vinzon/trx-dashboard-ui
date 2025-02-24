import { createGlobalStyle } from 'styled-components';
// import 'antd/dist/antd.css';

const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: 'Receipt';
  src: url(/fonts/receipt.otf) format('opentype');
}

  /*-----------------------------------------------*/
  // style for message
  /*-----------------------------------------------*/
  .ant-message-notice-content {
    background-color: rgba(30,30,30,0.95) !important;
    color: #ffffff;
    border-radius: 42px !important;
  }

  .ant-drawer-content-wrapper {
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    overflow: hidden;
  }

  .ant-modal-content {
    border-radius: 12px;
    overflow: hidden;
  }

  .ant-collapse {
    border-radius: 12px;
    background-color: #ffffff;
    border: none;
    box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;
  }

  .ant-collapse-item:last-child {
    .ant-collapse-content {
      border-radius: 12px;
    }
  }

  .ant-collapse {
    .collapse-arrow {
      top: 11px;
    }

    .ant-collapse-item-disabled {
      .ant-collapse-header {
        color: rgba(0, 0, 0, 0.85);
        cursor: default;
      }
    }
  }

  .ant-collapse-icon-position-right {
    .ant-collapse-item {
      .ant-collapse-header {
        padding: 12px 16px 12px 20px;
      }
    }
  }

  

  .ant-collapse-item {
    border: none;
  }

  .ant-collapse-content {
    border-top: none;
    background-color: #f6f8fa;
  }

  .ant-btn-lg {
    border: none,
    border-radius: 5px;
    padding: 12px;
    height: auto;
  }

  .ant-select-selector {
    height: 44px !important;
    border: solid 1px #bdbdbd !important;
    margin: 7px 0 0 0;

    input {
      height: 44px !important;
    }

    .ant-select-selection-placeholder {
        margin-top 2px !important;

        &:after {
          height: 44px !important;
        }
    }
    
    @media only screen and (max-width: 360px) {
        max-width: 300px;
    }
  }
  .ant-input-lg {
      padding: 10px 11px;
      font-size: 14px;
  }

  .ant-input-affix-wrapper-lg {
      padding: 0;
      border: none;
      padding: 0 11px;
      border: solid 1px #bdbdbd;

      .ant-input-lg {
        padding: 10px 0 !important;
      }
  }

  .ant-select-selection-placeholder,
  .ant-input:placeholder-shown {
    text-overflow: ellipsis;
    font-size: 14px;
  }

  .offset-panel-right {
    @media only screen and (min-width: 1021px) {
      padding-right: 350px;
    }
  }

  .method-desc {
      box-sizing: border-box;
      padding: 25px;
      line-height: 18px;
      font-size: 13px;
      color: #464545;
      border-bottom: solid 0.5px #f0f0f0;
  }

  .method-desc-desktop {
      box-sizing: border-box;
      padding: 10px 30px;
      line-height: 18px;
      font-size: 12px;
      color: #909090;
      background-color: #f5f5f5;
      border-bottom: solid 0.5px #f0f0f0;
  }

  .sticky-order {
    @media only screen and (min-width: 1021px) {
      margin-left: 430px !important;
      position: fixed;
    }
  }

  .pannel-header-root {
    padding-left: 40px;
  }

  .panel-header {
    .ant-collapse-header {
      .ant-collapse-arrow {
        top: 12px !important;
      }
    }

    .ant-collapse-extra {
      float: left;
      position: absolute;
      top: 16px;
    }
  }

  .ant-select-item-group {
    color: #444444;
    font-size: 12px;
    cursor: default;
    background-color: #e6e6e6;
    padding: 5px 10px;
    box-sizing: border-box;
  }

  .ant-select-item-option-content {
    padding: 10px;
    box-sizing: border-box;
  }

  .ant-skeleton-content {
    padding: 20px;
  }

`;

export default GlobalStyles;
