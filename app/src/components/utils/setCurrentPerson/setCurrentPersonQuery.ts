import {gql} from '@apollo/client';

const SetCurrentPersonQuery = gql`
  query SetCurrentUserQuery {
    currentPerson {
      id
    }
  }
`;

export default SetCurrentPersonQuery;
