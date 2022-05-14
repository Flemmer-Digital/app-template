export interface ApiConfiguration {
  production: {
    url: string
  }
  authenticationLocation: 'app' | 'web'
}

const apiConfiguration: ApiConfiguration = {
  production: {
    url: 'https://something',
  },
  authenticationLocation: 'app'
}

export default apiConfiguration
