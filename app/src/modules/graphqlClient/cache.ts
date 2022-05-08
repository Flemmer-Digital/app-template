import {InMemoryCache} from '@apollo/client';
import {CachePersistor, AsyncStorageWrapper} from 'apollo3-cache-persist';

import AsyncStorage from '@react-native-community/async-storage';

const cache = new InMemoryCache({});

const cachePersistor = new CachePersistor({
  cache,
  storage: new AsyncStorageWrapper(AsyncStorage),
  debounce: 0,
});
cachePersistor.restore();

export default cache;
