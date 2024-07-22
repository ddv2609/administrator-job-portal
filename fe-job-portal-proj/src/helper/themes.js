const primaryColor = "#00b14f";
const bgBlur = "#00b14f0a";

export const themes = {
  components: {
    Checkbox: {
      colorPrimary: primaryColor,
      colorPrimaryHover: primaryColor,
    },
    Radio: {
      colorPrimary: primaryColor,
      colorPrimaryHover: primaryColor,
    },
    Menu: {
      itemSelectedBg: bgBlur,
      itemHoverBg: bgBlur,
      itemActiveBg: bgBlur,
      itemSelectedColor: primaryColor,
    },
    Select: {
      optionSelectedBg: bgBlur,
      fontSizeLG: "14px",
      optionActiveBg: bgBlur,
      optionSelectedColor: primaryColor,
    },
    message: {
      maxCount: 3,
    },
    Layout: {
      bodyBg: bgBlur,
    },
    Tabs: {
      inkBarColor: primaryColor,
      itemActiveColor: "#00be55",
      itemHoverColor: primaryColor,
      itemSelectedColor: primaryColor,
    },
    Spin: {
      colorBgMask: "#FFF",
    },
    Dropdown: {
      controlItemBgHover: bgBlur,
    }
  }
};