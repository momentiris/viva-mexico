import { useParams, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeHome } from './ThemeHome';
import { TimelineInstance } from './TimelineInstance';

import { utils } from './utils';

export const Theme = () => {
  const params = useParams();
  const theme = utils.getThemeByThemeName(params.theme);

  if (!theme) {
    console.warn('no theme found for: ' + params.theme);
    return <Navigate to="/" />;
  }

  return (
    <Routes>
      <Route path="/" element={<ThemeHome theme={theme} />} />
      <Route
        path=":timelineInstance"
        element={<TimelineInstance theme={theme} />}
      />
    </Routes>
  );
};
