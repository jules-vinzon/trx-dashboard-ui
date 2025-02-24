import styled from 'styled-components';
import { palette } from 'styled-theme';
import { transition, transitionDelay } from 'components/utilities/styleUtils.js';
import colors from 'components/utilities/colors.json';


const MenuListWrapper = styled.div`
  width: 100%;
  display: flex !important;
  background-color: transparent;
  box-sizing: border-box;
  flex-direction: row;
  overflow: hidden;


  .selected {
    background-color: ${palette('grayscale', 3)} !important;
  }

  .default {
    padding: 8px 16px;
  }

  .small {
    padding: 8px 16px;
  }

  .medium {
    padding: 12px 16px;
  }

  .large {
    padding: 14px 16px;
  }

  button {
    font-size: 14px;
    font-weight: 400;
    color: #444444;
    background-color: transparent;
    width: 100% !important;
    max-width: 100%;
    min-height: 40px;
    height: auto;
    display: flex;
    border: 0;
    outline: 0;
    cursor: pointer;
    ${transition()};
    position: relative;
    box-sizing: border-box;
    text-align: left;
    align-items: center;
    padding-bottom: 8px;
    justify-content: flex-start;
    text-decoration: none;
    transform: translateX(0px);
    flex: 1px;

    @media only screen and (min-width: 426px) {
      line-height: 23px;
      .btnLblWidth {
        width: 100% ;
        flex: 1;
        white-space: nowrap;
        ${transition(0.3)};
      }
    }

    &:hover {
      background-color: ${colors.active_menu_color};
    }

    .btnLabelHolder {
      display: flex;
      flex-direction: column;
      align-items: self-start;
      text-align: left;
      flex: 1;
      box-sizing: border-box;
      ${transition()};

      .btnTitle {
        display: flex;
        justify-content: center;
        opacity: 1;
        flex: 1;
        width: 100%;
        overflow: hidden;
        height: inherit;
        align-items: center;
        padding: 0 0 2px 0;
        ${transitionDelay(0.3, 0.5)};
        font-size: 14px;
        font-weight: 400;
        line-height: 1.5;
        letter-spacing: 0.00938em;
        color: ${palette('label', 0)};
      }

      .btnSubTitle {
        font-size: 13px;
        font-weight: 400;
        line-height: 1.1;
        letter-spacing: 0.01071em;
        color: ${palette('label', 1)};
      }
  
      .btnLblWidth {
        width: 150px;
        flex: 1;
        white-space: nowrap;
        ${transition(0.3)};
      }
    }

    .withIcon {
      padding-left: 10px;
    }

    .btnIcon {
      font-size: 25px;
      align-self: center;
      margin: 0 0 0 10px;
      width: 30px;
      display: flex;
      justify-content: center;
      height: inherit;
      align-items: center;
      padding: 0 0 2px 0;
      color: inherit;
      ${transition(0.3)};

      .anticon {
        font-size: inherit !important;
        margin: 0px !important;
        width: auto;
        heigh: auto;
        ${transition(0.3)};
      }
    }

  }

  .editMode {
    ${transition()};
    transform: translateX(-120px)!important;
    cursor: not-allowed;
    opacity: 0.5;
    background-color: transparent !important;

    .btnLabelHolder {
      transform: translateX(100px)!important;
      ${transition()};
    }

    &:hover {
      background-color: transparent;
    }

  }
  .disabled {
    background-color: ${palette('grayscale', 4)};
  }
  .actions {
    display: flex !important;
    flex: 0 !important;
    // overflow: hidden;
    margin: 0px !important;
    align-self: flex-end;
    height: 100% !important;
    width: 0 !important;
    max-width: 120px;
    transform: translateX(120px);
    white-space: nowrap;
    background-color: ${palette('grayscale', 3)};
    ${transition()};
  }

  .editModeActions {
    margin: 0px !important;
    width: 120px !important;
    flex: 1 !important;
    transform: translateX(0px);
    ${transition()};

    @media only screen and (min-width: 426px) {
      transform: translateX(-60px);
    ${transition()};
    }

  }
`;

export default MenuListWrapper;
