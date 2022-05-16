type TColors = {
  primary: string;
  secondary: string;
};

type TextColors = {
  primary: string;
  secondary: string;
  primaryTinted: string;
  secondaryTinted: string;
};

interface IThemeSettings {
  colors: TColors;
  text: TextColors;
}

const themeSettings: IThemeSettings = {
  colors: {
    primary: '#FF478C',
    secondary: '#3443eb',
  },
  text: {
    primary: '#fff',
    secondary: '#000',
    primaryTinted: '#c4c4c4',
    secondaryTinted: '#c4c4c4',
  },
};

export default themeSettings;
