import {useQuery} from '@apollo/client';
import SetCurrentPersonQuery from './setCurrentPersonQuery';
const setCurrentUser = () => {
  const {data, loading, error} = useQuery(SetCurrentPersonQuery);
  return {
    data,
    loading,
    error,
  };
};

export default setCurrentUser;
