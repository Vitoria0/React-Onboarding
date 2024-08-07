import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setLocation } from '../features/location/locationSlice';
import routesConfig from '../routes/routesConfig';

const useNavigationButton = (pageToNavigate: string) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const locations = routesConfig.map((route) => {
    return route.path;
  });

  const path = locations.filter((path) => pageToNavigate === path).toString();

  const handleNavigationClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    dispatch(setLocation(path));
    navigate(`/${path}`);
  };

  return { handleNavigationClick };
};

export default useNavigationButton;
