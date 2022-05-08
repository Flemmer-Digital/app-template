
const makeApiRequest = async (url: string, method: string = 'GET') => {
  const result = await (await fetch(url, {method})).json()
  return result
}

export default makeApiRequest