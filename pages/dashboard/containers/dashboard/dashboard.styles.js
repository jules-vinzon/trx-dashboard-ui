import styled from 'styled-components';
import colors from 'components/utilities/colors';


const DashboardStyle = styled.div`
  display: flex;

  .ant-table {
    border-radius: 16px; 
    overflow: hidden; 
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .dashboard-container {
      padding: 50px 100px 50px 100px;
      margin-right: auto;
      margin-left: auto;
      min-width: ${({ collapsed }) => (collapsed ? 'calc(100vw)' : 'calc(100vw - 200px)')};
      display: flex;
      flex-direction: column;
      gap: 16px;

      @media only screen and (min-width: 320px) and (max-width: 570px) {
        padding: 20px;
        margin: 0 auto;
        width: ${({ collapsed }) => (collapsed ? 'calc(100% - 80px)' : 'calc(100% - 200px)')};
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
      
  }

  .filter-panel {
      margin: -30px 0 0 0;
  }
  
  .ant-table-column-sort, .ant-table-cell {
    background-color: white !important;
  } 
    
  .ant-btn {
    margin-right: 10px
  }

  .ant-typography-copy {
    margin-left: 10px;
    font-size: 11px;
    color: ${colors.company_color};

  }

  .dashboard-root-card {
    flex-direction: column;
    width: 100%;

    @media only screen and (min-width: 320px) and (max-width: 570px) {
        margin-left: ${({ collapsed }) => (collapsed ? '0' : '20px')};
    }

    .dashboard-card{
      margin: 20px 50px 20px 50px;
      flex-direction: column;
      box-shadow: rgb(0 0 0 / 20%) 0px 4px 8px 0px;

      @media only screen and (min-width: 320px) and (max-width: 570px) {
        width: 300px;
        margin: 20px auto;
      }
    }
    .tag-card{
      display: flex;
      justify-content: flex-end;
    }
    .message-container {
      flex: 1;
      display: flex;
      flex-direction: column;
      font-size: 11px;
    }
  }

  .filter-btn {

    @media only screen and (min-width: 320px) and (max-width: 570px) {
        margin-top: 25px;
    }
  }

  .reset-filter {
    cursor: pointer;
    margin: auto 0 auto 23px;
    background: none !important;
    border: none !important;

    @media only screen and (min-width: 320px) {
      margin-left: 3px !important;
    }
  }
`;

export default (DashboardStyle);
