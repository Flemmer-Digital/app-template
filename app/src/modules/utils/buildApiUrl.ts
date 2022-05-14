import buildUrl from '@googlicius/build-url';
import api from 'app/src/config/api';

type Params = {queryParams: {[key: string]: string | number}};
const buildApiUrl = (
  relativePath: string,
  params: Params = {queryParams: {}},
) => {
  const baseUrl = __DEV__ ? 'http://localhost:3000' : api.production.url;
  return buildUrl(baseUrl + relativePath, params);
};

export default buildApiUrl;
