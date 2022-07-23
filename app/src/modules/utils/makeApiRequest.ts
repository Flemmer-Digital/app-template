const makeApiRequest = async (url: string, method = 'GET') => {
  const result = await (await fetch(url, {method})).json();
  return result;
};

export default makeApiRequest;
