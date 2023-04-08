import { NavigateFunction } from 'react-router-dom';

interface Navigation {
  navigate?: NavigateFunction;
}

export const history: Navigation = {};

export const appNavigation = (path: string): void => {
  if (history.navigate) {
    history.navigate(path);
  }
};
