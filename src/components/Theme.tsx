import { useParams, Navigate } from 'react-router-dom';

import { ThemeHome } from './ThemeHome';
import { utils } from '../utils';

export const Theme = () => {
  const params = useParams<'theme'>();
  const theme = utils.getThemeByThemeName(params.theme);

  if (!theme) {
    console.warn('no theme found for: ' + params.theme);
    return <Navigate to="/" />;
  }

  return <ThemeHome theme={theme} />;
};
