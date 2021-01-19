import Root from "./components";

export default {
  name: "jsnation-theme",
  roots: {
    theme: Root
  },
  state: {
    theme: {
      isMenuOpen : false
    }
  },
  actions: {
    theme: {
      openMenu: ({state}) => {
        state.theme.isMenuOpen = true;
      },
      closeMenu: ({state}) => {
        state.theme.isMenuOpen = false;
      }
    }
  }
};
