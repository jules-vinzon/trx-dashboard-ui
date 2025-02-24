import styled from "styled-components";
import colors from "components/utilities/colors.json";

const SidebarStyles = styled.div`
  .sidebar-logo {
    max-height: 220px;
    max-width: 100px;
    margin: 30px 0 50px 0;
  }

  .trx-logo {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .menu-bar {
    margin-top: 10px;
    background-color: ${colors.company_color};
    font-weight: bold;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .menu-forms {
    font-weight: bold;
    margin: 30px 0 0 15px;
    color: white;
    font-size: 16px;
  }

  .user-management-submenu .ant-menu-submenu-title {
    padding-left: ${({ collapsed }) =>
      collapsed ? "24px" : "13px"} !important;
  }

  .ant-menu-title-content,
  .ant-menu-submenu-title,
  .ant-menu-item {
    color: white;
  }

  .ant-menu-item-selected,
  .ant-menu-item-selected:hover {
    background-color: ${colors.active_menu_color};

    .anticon {
      color: black !important;
    }

    .ant-menu-title-content {
      color: black !important;
    }
  }

  .ant-menu-submenu-open .ant-menu-submenu-title {
    color: white !important;
  }

  .ant-menu-item-selected .ant-menu-title-content {
    color: black !important;
  }
`;

export default SidebarStyles;
