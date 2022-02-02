import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Theme } from './components/Theme';
import { Themes } from './components/Themes';

import { Model } from './components/Model';
import { ThemePost } from './components/ThemePost';
import { Layout } from './components/Layout';
import { Start } from './components/Start';
import { ThemeObjectText } from './components/ThemeObjectText';
import { ScrollToTop } from './components/ScrollToTop';
import { Models } from './components/Models';
import { ScreenOne, ScreenTwo } from './screens';

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
        <Route path="themes" element={<Themes />} />
        <Route path="themes/:theme" element={<Theme />} />
        <Route path="themes/:theme/posts/:post" element={<ThemePost />} />
        <Route
          path="themes/:theme/object-text/:post"
          element={<ThemeObjectText />}
        />
        <Route path="models" element={<Models />} />
      </Route>
      <Route path="/screen/one" element={<ScreenOne />} />
      <Route path="/screen/two" element={<ScreenTwo />} />
      <Route path="/models/:model" element={<Model />} />
    </Routes>
  );
};

export default App;
