import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { ScreenOne, ScreenTwo } from './screens';
import { Intro } from './Intro';
import { HuacalWall } from './HuacalWall';
import { Outro } from './Outro';
import {
  ScrollToTop,
  Layout,
  Start,
  Themes,
  Theme,
  ThemePost,
  ThemeObjectText,
  InDepths,
  InDepth,
  Models,
  Model,
} from './components';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Router />
    </BrowserRouter>
  );
}

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Start />} />
        <Route path="intro" element={<Intro />} />
        <Route path="huacal-wall" element={<HuacalWall />} />
        <Route path="outro" element={<Outro />} />
        <Route path="themes" element={<Themes />} />
        <Route path="themes/:theme" element={<Theme />} />
        <Route path="themes/:theme/posts/:post" element={<ThemePost />} />
        <Route
          path="themes/:theme/object-text/:post"
          element={<ThemeObjectText />}
        />
        <Route path="in-depth" element={<InDepths />} />
        <Route path="in-depth/:slug" element={<InDepth />} />
        <Route path="models" element={<Models />} />
        <Route path="/models/:model" element={<Model />} />
      </Route>
      <Route path="/screen/one" element={<ScreenOne />} />
      <Route path="/screen/two" element={<ScreenTwo />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
