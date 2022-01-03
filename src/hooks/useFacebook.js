import { useContext } from 'react';
import FacebookContext from '../contexts/FacebookContext';

const useFacebook = () => {
  const context = useContext(FacebookContext);

  return context;
};

export default useFacebook;
