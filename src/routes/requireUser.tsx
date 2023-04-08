import { Navigate, Outlet, useLocation } from 'react-router-dom';

export const RequireUser = () => {
  const location = useLocation();

  const token = sessionStorage.getItem('TOKEN_KEY');

  if (!!token) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
};
