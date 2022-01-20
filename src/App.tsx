import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import { Theme } from './Theme';
import { InDepth } from './InDepth';
import { Home } from './Home';

import { ScreenOne } from './ScreenOne';
import { ModelRouter } from './ModelRouter';
import { ThemePost } from './ThemePost';
import { ThemeObjectText } from './ThemeObjectText';

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/theme/:theme" element={<Theme />} />
      <Route path="/theme/:theme/post/:post" element={<ThemePost />} />
      <Route
        path="/theme/:theme/object-text/:slug"
        element={<ThemeObjectText />}
      />

      <Route path="model/:model" element={<ModelRouter />} />
      <Route path="/screen/one" element={<ScreenOne />} />
      {/* <Route path="/in-depth/:slug" element={<InDepth />} /> */}
    </Routes>
  );
};

export default App;
