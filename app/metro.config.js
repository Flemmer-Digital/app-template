/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const {getDefaultConfig} = require('metro-config');
const {resolver: defaultResolver} = getDefaultConfig.getDefaultValues();

module.exports = {
  transformer: {
    babelTransformerPath: require.resolve(
      'react-native-typescript-transformer',
    ),
  },
  resolver: {
    ...defaultResolver,
    sourceExts: [...defaultResolver.sourceExts, 'cjs'],
  },
};
