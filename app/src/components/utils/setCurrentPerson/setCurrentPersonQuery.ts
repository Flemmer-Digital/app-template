import {gql} from '@apollo/client';

const SetCurrentPersonQuery = gql`
  query SetCurrentUserQuery {
    person {
      id
    }
  }
`;

export default SetCurrentPersonQuery;
