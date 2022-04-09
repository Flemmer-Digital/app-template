import * as Sentry from '@sentry/react-native'

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// change dsn to project specific dsn
Sentry.init({
  dsn: "",
});

AppRegistry.registerComponent(appName, () => App);
