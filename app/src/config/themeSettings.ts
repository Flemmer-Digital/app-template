type TColors = {
  primary: string;
  secondary: string;
};

interface IThemeSettings {
  colors: TColors;
  text: TColors;
}

const themeSettings: IThemeSettings = {
  colors: {
    primary: '#FF478C',
    secondary: '#3443eb',
  },
  text: {
    primary: '#fff',
    secondary: '#000',
  },
};

export default themeSettings;
