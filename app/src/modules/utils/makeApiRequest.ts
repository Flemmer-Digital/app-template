const makeApiRequest = async (
  url: string,
  bodyObj: {[key: string]: string},
  headers: {[key: string]: string},
  method = 'GET',
) => {
  const bodyArray: string[] = [];
  Object.keys(bodyObj).forEach(key => {
    bodyArray.push(`${key}=${bodyObj[key]}`);
  });
  const body = bodyArray.join('&').trim();
  const result = await (
    await fetch(url, {
      method,
      body,
      headers,
    })
  ).json();
  return result;
};

export default makeApiRequest;
