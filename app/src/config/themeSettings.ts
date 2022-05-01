type TColors = {
  primary: string;
  secondary: string;
};

interface IThemeSettings {
  colors: TColors;
}

const themeSettings: IThemeSettings = {
  colors: {
    primary: '#eb4034',
    secondary: '#3443eb',
  },
};

export default themeSettings;
