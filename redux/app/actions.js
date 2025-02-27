export function getView(width) {
    let newView = 'MobileView';
    if (width > 1220) {
      newView = 'DesktopView';
    } else if (width > 1023) {
      newView = 'TabViewLg';
    } else if (width > 767) {
      newView = 'TabView';
    }
    return newView;
  }


const actions = {
    TOGGLE_ALL: 'TOGGLE_ALL',

    toggleAll: (width, height) => {
        const view = getView(width);
        const collapsed = view !== 'DesktopView';
        return {
          type: actions.TOGGLE_ALL,
          collapsed,
          view,
          height,
        };
      },
}

export default actions;