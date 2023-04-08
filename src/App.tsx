import { useNavigate } from 'react-router-dom';
import { AppRoutes } from './routes';
import { history } from './shared/utilities/history';

export const App = () => {
  history.navigate = useNavigate();

  return <AppRoutes />;
};
