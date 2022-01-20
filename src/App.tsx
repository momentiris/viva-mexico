import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import { Theme } from './Theme';
import { InDepth } from './InDepth';
import { Home } from './Home';

import { ScreenOne } from './ScreenOne';
import { ModelRouter } from './ModelRouter';
import { ThemePost } from './ThemePost';

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
      <Route path="theme/:theme" element={<Theme />}></Route>
      <Route path="theme/:theme/:post" element={<ThemePost />} />

      <Route path="model/:model" element={<ModelRouter />} />
      <Route path="/screen/one" element={<ScreenOne />} />
      {/* <Route path="/in-depth/:slug" element={<InDepth />} /> */}
    </Routes>
  );
};

export default App;
