type TColors = {
  primary: string;
  secondary: string;
};

interface IThemeSettings {
  colors: TColors;
}

const themeSettings: IThemeSettings = {
  colors: {
    primary: '#FF478C',
    secondary: '#3443eb',
  },
};

export default themeSettings;
