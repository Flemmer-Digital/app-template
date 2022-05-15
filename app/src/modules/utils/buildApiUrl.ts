import api from 'app/src/config/api';

type Params = {[key: string]: string | number | undefined};
const buildApiUrl = (
  relativePath: string,
  params: Params = {},
) => {
  const baseUrl = __DEV__ ? 'http://localhost:3000' : api.production.url;
  let paramsString: string = '?'
  Object.keys(params).forEach((key) => {
    paramsString = `${paramsString}${key}=${params[key]}&`
  })
  
  return `${baseUrl}${relativePath}${paramsString.slice(0, paramsString.length - 1)}`
};

export default buildApiUrl;
