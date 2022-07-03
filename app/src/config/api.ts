export interface ApiConfiguration {
  production: {
    url: string;
  };
  authenticationLocation: 'web';
}

const apiConfiguration: ApiConfiguration = {
  production: {
    url: 'https://something',
  },
  authenticationLocation: 'web',
};

export default apiConfiguration;
