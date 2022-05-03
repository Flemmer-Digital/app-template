import {gql} from '@apollo/client';

const SetCurrentUserQuery = gql`
  query SetCurrentUserQuery {
    currentPerson {
      id
      name
    }
  }
`;

export default SetCurrentUserQuery;
