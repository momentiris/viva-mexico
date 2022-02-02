import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Theme } from './Theme';
import { Themes } from './Themes';

import { Model } from './Model';
import { ThemePost } from './ThemePost';
import { Layout } from './Layout';
import { Start } from './Start';
import { ThemeObjectText } from './ThemeObjectText';
import { ScrollToTop } from './ScrollToTop';
import { Models } from './Models';
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
