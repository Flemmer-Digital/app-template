import buildApiUrl from './buildApiUrl';
import api from 'app/src/config/api';

const localGraphqlEndpoint = 'http://localhost:3000/graphql';

it('points to the dev graphql route', () => {
  expect(buildApiUrl('/graphql')).toEqual(localGraphqlEndpoint);
});

it('points to the dev graphql route, with some params', () => {
  expect(buildApiUrl('/graphql', {queryParams: {id: 23}})).toEqual(
    `${localGraphqlEndpoint}?id=23`,
  );
});

it('points to production graphql routes', () => {
  //@ts-ignore
  global.__DEV__ = false;
  expect(buildApiUrl('/graphql')).toEqual(`${api.production.url}/graphql`);
});

it('points to production graphql routes, with params', () => {
  //@ts-ignore
  global.__DEV__ = false;
  expect(buildApiUrl('/graphql', {queryParams: {filter: 'age'}})).toEqual(
    `${api.production.url}/graphql?filter=age`,
  );
});
